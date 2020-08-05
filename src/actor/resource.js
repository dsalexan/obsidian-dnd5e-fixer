/* global OBSIDIAN, ui */

import get from 'lodash/get'

export function onUpdateActor(actor, updated) {
  // if not a resources update, bail out
  if (!get(updated, 'data.resources')) return

  // get correspondent obsidian resource
  const obsidianEffects = Array.from(actor.data.obsidian.effects)
    .map(([, value]) => value)
    .filter((effect) => effect.components.find((component) => component.type === 'resource'))

  Object.entries(updated.data.resources).map(([label, resource]) => {
    const currentResource = actor.data.data.resources[label]

    const max = get(resource, 'max') !== undefined ? get(resource, 'max') : currentResource.max
    const value = get(resource, 'value') !== undefined ? get(resource, 'value') : currentResource.value

    const correspondentEffect = obsidianEffects.find((effect) =>
      effect.components.find((component) => component.name === currentResource.label)
    )
    if (!correspondentEffect)
      return ui.notifications.warn(
        `There is no Obsidian Effect for resource <b>${currentResource.label}</b> in actor ${actor.data.name}.`
      )

    const item = actor.getEmbeddedEntity('OwnedItem', correspondentEffect.parentItem)
    if (!item)
      return ui.notifications.warn(
        `There is no OwnedItem for resource <b>${currentResource.label}</b> in actor ${actor.data.name}.`
      )

    const component = correspondentEffect.components.find(
      (component) => component.type === 'resource' && component.name === currentResource.label
    )

    const update = {
      _id: item._id,
      [`flags.obsidian.effects.${correspondentEffect.idx}.components.${component.idx}.remaining`]: Math.min(max, value), // value === remaining
    }

    const obsidianRemaining = actor.data.obsidian.effects.get(correspondentEffect.uuid).components[component.idx]
      .remaining
    if (Math.min(max, value) == obsidianRemaining) return

    actor.updateEmbeddedEntity('OwnedItem', OBSIDIAN.updateArrays(item, update))
  })
}

export function onUpdateOwnedItem(actor, item) {
  // get resource name
  const obsidianResourceName = get(item, 'obsidian.bestResource.label')

  if (!obsidianResourceName) return
  // get correspondent dnd5e system resource
  const [label, resource] =
    Object.entries(actor.data.data.resources).find(([, resource]) => resource.label === obsidianResourceName) || []

  if (!label) return
  if (
    resource.max == get(item, 'obsidian.bestResource.max') &&
    resource.value == get(item, 'obsidian.bestResource.remaining')
  )
    return

  actor.update({
    [`data.resources.${label}.max`]: get(item, 'obsidian.bestResource.max'),
    [`data.resources.${label}.value`]: get(item, 'obsidian.bestResource.remaining'),
  })
}

export default { onUpdateActor, onUpdateOwnedItem }
