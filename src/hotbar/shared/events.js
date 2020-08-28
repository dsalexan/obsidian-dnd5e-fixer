/* global game, canvas, $, ui */

import get from 'lodash-es/get'
import debounce from 'lodash-es/debounce'

import { SCOPE } from './constant'
import hotbar from './hotbar'
import shared from './sharedHotbar'

var ignoreUpdateUser = false // semaphore for updateUser hooks triggered by change in controlled token

export function onReady() {
  // check if user has flag
  const hasFlag = game.user.getFlag(SCOPE, 'shared-hotbar')

  // if it doesnt, get current user.hotbar and save it as user general
  if (!hasFlag) {
    const currentHotbar = game.user.data.hotbar
    game.user.setFlag(SCOPE, 'shared-hotbar', { general: currentHotbar, locked: false })
  } else {
    // if it does, load user general
    const { general, locked } = hasFlag

    if (locked) return
    ignoreUpdateUser = true
    hotbar.load(general || {}).then(() => (ignoreUpdateUser = false))
  }
}

function _onControlToken(token, controlled) {
  // console.log('_onControlToken', { token, controlled })
  if (game.user.getFlag('may', 'shared-hotbar.locked')) return

  let hotbarConfig = {}
  if (!controlled || canvas.tokens.controlled.length > 1) {
    // load user general
    hotbarConfig = game.user.getFlag('may', 'shared-hotbar.general') || {}
  } else {
    // load token specific
    hotbarConfig = shared.loadFromToken(token)
  }

  ignoreUpdateUser = true
  hotbar.load(hotbarConfig || {}).then(() => (ignoreUpdateUser = false))
}

export const onControlToken = debounce(_onControlToken, 100)

export function onUpdateUser(user, { hotbar }, { diff }, _id) {
  if (game.user.getFlag('may', 'shared-hotbar.locked')) return
  // console.log('onUpdateUser', user, { hotbar }, { diff }, _id)
  // called when hotbar is updated
  if (!diff) return
  if (!hotbar) return
  if (ignoreUpdateUser) return //console.log('MAY, Shared Hotbar |', 'Ignoring update user')

  const oneTokenSelected = canvas.tokens.controlled.length === 1
  const currentHotbar = get(user, 'data.hotbar')

  // Iterate over the other object to set removals
  Object.entries(hotbar).map(([key, value]) => {
    // should delete?
    let toDelete = false
    if (key.startsWith('-=')) {
      key = key.slice(2)
      toDelete = value === null
    }

    if (toDelete) currentHotbar[key] = value
  })

  if (oneTokenSelected) {
    // save to token/actor
    const [token] = canvas.tokens.controlled
    shared.saveToToken(token, currentHotbar)
  } else {
    // save as general
    game.user.setFlag(SCOPE, 'shared-hotbar.general', currentHotbar)
  }
}

export function onCreateToken(scene, tokenData, userId) {
  const token = get(canvas, 'tokens.placeables', []).find((p) => p.id === tokenData._id)

  if (!token) return

  if (!tokenData.actorLink) {
    // bring actor hotbar to token
    const hotbar = token.actor.getFlag('may', 'shared-hotbar')
    if (!hotbar) return

    token.setFlag('may', 'shared-hotbar', hotbar)
  }
}

export function onToggleSharedHotbar() {
  const { locked, general } = game.user.getFlag('may', 'shared-hotbar') || {}
  const unlockingSharedHotbar = !locked === false

  if (unlockingSharedHotbar) game.user.setFlag(SCOPE, 'shared-hotbar.general', game.user.data.hotbar)
  else {
    ignoreUpdateUser = true
    hotbar.load(general || {}).then(() => (ignoreUpdateUser = false))
  }

  game.user.setFlag('may', 'shared-hotbar.locked', !locked)

  $('li[data-control="shared-hotbar-control"]').attr('title', locked ? 'General Hotbar' : 'Shared Hotbar')
  $('li[data-control="shared-hotbar-control"]').find(':first-child').remove()
  $('li[data-control="shared-hotbar-control"]').prepend(`<i class="fas fa-${locked ? 'lock' : 'fire'}"></i>`)

  return !locked
}

// UI STUFF

export function onGetSceneControlButtons(controls) {
  const isLocked = game.user.getFlag('may', 'shared-hotbar.locked')

  controls.push({
    name: 'shared-hotbar-control',
    title: !isLocked ? 'General Hotbar' : 'Shared Hotbar',
    // layer: "NotesLayer",
    icon: !isLocked ? 'fas fa-lock' : 'fas fa-fire',
    activeTool: 'select',
    tools: [
      {
        name: 'select',
        title: !isLocked ? 'Lock at General Hotbar' : 'Unlock Shared Hotbar',
        icon: !isLocked ? 'fas fa-lock' : 'fas fa-fire',
      },
    ],
  })
}

export function onRenderSceneControls() {
  $('li[data-control="shared-hotbar-control"]')[0].onclick = () => {
    const locked = onToggleSharedHotbar()
    ui.notifications.info(`May — ${locked ? 'Locking General Hotbar' : 'Unlocking Shared Hotbar'}`)
  }
}

function clearTokens() {
  canvas.tokens.controlled.map((token) => {
    token.update({ 'flags.may.shared-hotbar': null })
    if (token.data.actorLink) {
      token.actor.update({ 'flags.may.shared-hotbar': null })
    }
  })
}

function clearUser() {
  game.user.unsetFlag('may', 'shared-hotbar')
}

export default { onReady, onControlToken, onUpdateUser, onCreateToken, onGetSceneControlButtons, onRenderSceneControls }
