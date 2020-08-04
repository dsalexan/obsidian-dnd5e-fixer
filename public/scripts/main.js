Hooks.once('init', function() {
  console.log('INIT OBSIDIAN-FIXER', CONFIG.statusEffects)
})

// // This hook is required for Tokens NOT linked to an Actor
Hooks.on("updateToken", (scene, sceneID, update, tokenData, userId) => {
  const token = canvas.tokens.get(update._id);
  // if (token.owner) token._updateHealthOverlay(token);
  console.log('UPDATE TOKEN', token, {scene, sceneID, update, tokenData, userId})
});

// This hook is required for Tokens linked to an Actor
Hooks.on("updateActor", (actor, updated) => {
  // if not a resources update, bail out
  if (!updated.data?.resources) return

  if (actor.data.flags['obsidian-fixer'] === 'skip|updateActor') return actor.update({
    [`flags.obsidian-fixer`]: null
  })

  // get correspondent obsidian resource
  const obsidianEffects = Array.from(actor.data.obsidian.effects).map(([, value]) => value).filter(effect => effect.components.find(component => component.type === 'resource'))

  Object.entries(updated.data.resources).map(([label, resource]) => {
    const currentResource = actor.data.data.resources[label]

    const max = resource?.max !== undefined ? resource?.max : currentResource.max
    const value = resource?.value !== undefined ? resource?.value : currentResource.value

    const correspondentEffect = obsidianEffects.find(effect => effect.components.find(component => component.name === currentResource.label))
    if (!correspondentEffect) return ui.notifications.warn(`There is no Obsidian Effect for resource <b>${currentResource.label}</b> in actor ${actor.data.name}.`)

		const item = actor.getEmbeddedEntity('OwnedItem', correspondentEffect.parentItem)    
    if (!item) return ui.notifications.warn(`There is no OwnedItem for resource <b>${currentResource.label}</b> in actor ${actor.data.name}.`)

    const component = correspondentEffect.components.find(component => component.type === 'resource' && component.name === currentResource.label)
    
		const update = {
			_id: item._id,
			[`flags.obsidian.effects.${correspondentEffect.idx}.components.${component.idx}.remaining`]: Math.min(max, value) // value === remaining
		}

    // console.log('updateEmbeddedEntity', update)
		actor.updateEmbeddedEntity('OwnedItem', OBSIDIAN.updateArrays(item, update));
  })
});

// This hook is required for Tokens linked to an Actor
Hooks.on("updateOwnedItem", (actor, item) => {
  // get resource name
  const obsidianResourceName = item.obsidian?.bestResource?.label
  
  if (!obsidianResourceName) return
  // get correspondent dnd5e system resource
  const [label, resource] = Object.entries(actor.data.data.resources).find(([, resource]) => resource.label === obsidianResourceName) || []

  if (!label) return

  console.log('updatedOwnedItem', '> actor.update', label, resource, {
    [`data.resources.${label}.max`]: item.obsidian?.bestResource?.max ,
    [`data.resources.${label}.value`]: item.obsidian?.bestResource?.remaining,
    [`flags.obsidian-fixer`]: 'skip|updateActor'
  })

  actor.update({
    [`data.resources.${label}.max`]: item.obsidian?.bestResource?.max ,
    [`data.resources.${label}.value`]: item.obsidian?.bestResource?.remaining,
    [`flags.obsidian-fixer`]: 'skip|updateActor'
  })
});