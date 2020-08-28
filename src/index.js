/* global Hooks, CONFIG, OBSIDIAN, ui */

import actorResource from './actor/resource'
import actorArmorClass from './actor/ac'
import actorSkill from './actor/skill'
import actorEffect from './actor/effect'

import sharedData from './hotbar/shared'
import tokenOverlay from './token/overlay'

Hooks.once('init', function () {
  console.log('MAY |', 'Initializing May module')
})

sharedData.registerHooks()

tokenOverlay.registerPrototypes()
tokenOverlay.registerHooks()

// // This hook is required for Tokens NOT linked to an Actor
// Hooks.on("updateToken", (scene, sceneID, update, tokenData, userId) => {
//   const token = canvas.tokens.get(update._id);
//   // if (token.owner) token._updateHealthOverlay(token);
//   console.log('UPDATE TOKEN', token, {scene, sceneID, update, tokenData, userId})
// });

// This hook is required for Tokens linked to an Actor
Hooks.on('updateActor', (actor, updated) => {
  // console.log('HOOKS >', 'updateActor', { actor, updated })

  actorResource.onUpdateActor(actor, updated)
  actorArmorClass.onUpdateActor(actor, updated)
  actorSkill.onUpdateActor(actor, updated)
})

// This hook is required for Tokens linked to an Actor
Hooks.on('updateOwnedItem', (actor, item) => {
  // console.log('HOOKS >', 'updateOwnedItem', { actor, item })

  actorResource.onUpdateOwnedItem(actor, item)
})

Hooks.on('createOwnedItem', (actor, item) => {
  // console.log('HOOKS >', 'createOwnedItem', { actor, item })

  actorEffect.onCreateOwnedItem(actor, item)
})

Hooks.on('deleteOwnedItem', (actor, item) => {
  // console.log('HOOKS >', 'deleteOwnedItem', { actor, item })

  actorEffect.onDeleteOwnedItem(actor, item)
})

// HOOK > ready -> Load hotbar with user's default
// HOOK > token select -> Load hotbar with actors/tokens variant
// HOOK > drop on hotbar -> Save hotbar to actors/tokens variant/user's default
