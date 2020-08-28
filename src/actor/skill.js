/* global OBSIDIAN, ui */

import get from 'lodash-es/get'

function onUpdateObsidianSkill(actor, updated) {
  // if not a ac update, bail out
  if (!get(updated, 'flags.obsidian.skills')) return

  const skills = Object.entries(get(updated, 'flags.obsidian.skills'))

  // console.log('HOOKS >', 'updateActor >', 'updateObsidianSkill', { actor, updated, skills })

  skills.map(([skill, data]) => {
    const defaultSkill = get(actor, `data.data.skills.${skill}`, {})

    const value = get(data, 'value', get(defaultSkill, 'value', 0))
    const ability = get(data, 'ability', get(defaultSkill, 'ability'))
    const bonus = get(data, 'bonus', get(defaultSkill, 'bonus', 0))

    actor.update({
      [`data.skills.${skill}.value`]: value,
      [`data.skills.${skill}.ability`]: ability,
      [`data.skills.${skill}.bonus`]: bonus,
    })
  })
}

function onUpdateDefaultSkill(actor, updated) {
  // if not a ac update, bail out
  if (!get(updated, 'data.skills')) return

  const skills = Object.entries(get(updated, 'data.skills'))

  // console.log('HOOKS >', 'updateActor >', 'updateSkill', { actor, updated, skills })

  skills.map(([skill, data]) => {
    const obsidianSkill = get(actor, `data.flags.obsidian.skills.${skill}`, {})

    const value = get(data, 'value', get(obsidianSkill, 'value', 0))
    const ability = get(data, 'ability', get(obsidianSkill, 'ability'))
    const bonus = get(data, 'bonus', get(obsidianSkill, 'bonus', 0))

    if (value === obsidianSkill.value && ability === obsidianSkill.ability && bonus === obsidianSkill.bonus) return

    actor.update({
      [`flags.obsidian.skills.${skill}.value`]: value,
      [`flags.obsidian.skills.${skill}.ability`]: ability,
      [`flags.obsidian.skills.${skill}.bonus`]: bonus,
    })
  })
}

export function onUpdateActor(actor, updated) {
  onUpdateDefaultSkill(actor, updated)
  onUpdateObsidianSkill(actor, updated)
}

export default { onUpdateActor }
