/* global Hooks, $, game */

import events from './events'

export const registerHooks = () => {
  Hooks.on('ready', events.onReady)

  Hooks.on('createToken', events.onCreateToken)

  Hooks.on('controlToken', events.onControlToken)

  Hooks.on('updateUser', events.onUpdateUser)

  // Hooks.on('hotbarDrop', function () {
  //   console.log('hotbarDrop', arguments)
  // })

  Hooks.on('getSceneControlButtons', events.onGetSceneControlButtons)

  Hooks.on('renderSceneControls', events.onRenderSceneControls)
}

export default { registerHooks }
