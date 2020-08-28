/* global CombatTracker, trPatchLib, canvas */
export function onReady() {
  let newClass = CombatTracker
  newClass = trPatchLib.patchMethod(
    newClass,
    '_onCombatantControl',
    21,
    `if ( isDefeated && !token.data.overlayEffect ) token.toggleOverlay(CONFIG.controlIcons.defeated);`,
    `if ( isDefeated && token.data.overlayEffect !== CONFIG.controlIcons.defeated ) token.toggleOverlay(CONFIG.controlIcons.defeated);`
  )
  if (!newClass) return

  CombatTracker.prototype._onCombatantControl = newClass.prototype._onCombatantControl
}

export function onUpdateToken(scene, sceneID, update, tokenData, userId) {
  let token = canvas.tokens.get(update._id)
  if (token.owner) token._updateHealthOverlay && token._updateHealthOverlay(token)
}

// This hook is required for Tokens linked to an Actor
export function onUpdateActor(entity, updated) {
  if (entity.owner) entity.getActiveTokens(true).map((x) => x._updateHealthOverlay && x._updateHealthOverlay(x))
}

export default {
  onReady,
  onUpdateToken,
  onUpdateActor,
}
