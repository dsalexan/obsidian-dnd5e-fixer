/* global OBSIDIAN, ui */

import get from 'lodash-es/get'

function onUpdateDefaultAC(actor, updated) {
  // if not a ac update, bail out
  if (!get(updated, 'data.attributes.ac')) return

  // console.log('HOOKS >', 'updateActor >', 'updateAC', { actor, updated })

  // get correspondent obsidian ac
  const O_base = get(actor, 'data.flags.obsidian.attributes.ac.base', 10)
  const O_mod1 = get(actor.data, `data.abilities.${get(actor.data, 'flags.obsidian.attributes.ac.ability1')}.mod`, 0)
  const O_mod2 = get(actor.data, `data.abilities.${get(actor.data, 'flags.obsidian.attributes.ac.ability2')}.mod`, 0)

  const newAc = get(updated, 'data.attributes.ac.value', 10 + O_mod1 + O_mod2)
  const newBaseAc = newAc - O_mod1 - O_mod2

  if (newBaseAc === O_base) return

  actor.update({
    'flags.obsidian.attributes.ac.base': newBaseAc,
  })
}

function onUpdatedObsidianAC(actor, updated) {
  // if not a ac update, bail out
  if (!get(updated, 'flags.obsidian.attributes.ac')) return

  // console.log('HOOKS >', 'updateActor >', 'updateObsidianAC', { actor, updated })

  // get correspondent default ac
  const acValue = get(actor, 'data.data.attributes.ac.value', 10)

  const updatedAc = get(updated, 'flags.obsidian.attributes.ac')
  const obsidianAc = get(actor, 'data.flags.obsidian.attributes.ac')

  const newBase = get(updatedAc, 'base', get(obsidianAc, 'base', 10))
  const newAbility1 = get(updatedAc, 'ability1', get(obsidianAc, 'ability1'))
  const newAbility2 = get(updatedAc, 'ability2', get(obsidianAc, 'ability2'))

  const O_mod1 = get(actor.data, `data.abilities.${newAbility1}.mod`, 0)
  const O_mod2 = get(actor.data, `data.abilities.${newAbility2}.mod`, 0)

  const newAc = newBase + O_mod1 + O_mod2

  if (newAc === acValue) return

  actor.update({
    'data.attributes.ac.value': newAc,
    'data.attributes.ac.max': newAc,
  })
}

export function onUpdateActor(actor, updated) {
  onUpdateDefaultAC(actor, updated)
  onUpdatedObsidianAC(actor, updated)
}

export default { onUpdateActor }
