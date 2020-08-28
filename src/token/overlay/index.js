/* global Hooks, $, game, CONFIG, Token, Auras */

import chroma from 'chroma-js'

import events from './events'

export const registerHooks = () => {
  Hooks.on('ready', events.onReady)
  Hooks.on('updateToken', events.onUpdateToken)
  Hooks.on('updateActor', events.onUpdateActor)
}

export const registerPrototypes = () => {
  // Replace selected control icons
  CONFIG.controlIcons.visibility = 'modules/may/icons/invisible.svg'
  CONFIG.controlIcons.defeated = 'modules/may/icons/dead.svg'

  const GAME_ICONS_NET = 'modules/game-icons-net/whitetransparent'
  const MAY = 'modules/may/icons'

  const SVG = {
    dead: `${MAY}/dead.svg`,
    almostdead: `${GAME_ICONS_NET}/`,
    wounded: `${GAME_ICONS_NET}/`,
  }

  Auras.getHealthAuras = function (token) {
    let maxHP = token.actor.data.data.attributes.hp.max
    let curHP = token.actor.data.data.attributes.hp.value

    const scale = chroma.scale(['#E53935', '#1abc1a']).mode('lch')
    const colour = curHP <= 0 ? '#000000' : scale(curHP / maxHP).toString()

    return [
      {
        distance: 0.5,
        colour,
        opacity: 0.75,
        square: false,
        uuid: Auras.uuid(),
      },
    ]
  }

  Auras.getAllAuras = function (token) {
    return Auras.getManualAuras(token)
      .concat(token.getFlag('token-auras', 'auras') || [])
      .concat(Auras.getHealthAuras(token))
  }

  Token.prototype._updateHealthOverlay = function (tok) {
    let maxHP = tok.actor.data.data.attributes.hp.max
    let curHP = tok.actor.data.data.attributes.hp.value
    let priorHealth = tok.data.overlayEffect

    // let newHealth = null
    // if (curHP <= 0) {
    //   if (priorHealth === SVG.dead) newHealth = priorHealth
    //   else newHealth = SVG.almostdead
    // } else if (curHP / maxHP < 0.5) newHealth = SVG.wounded

    this.drawAuras()
    // if (newHealth !== priorHealth) {
    //   if (newHealth === null) tok.toggleOverlay(priorHealth)
    //   else tok.toggleOverlay(newHealth)
    // }
  }
}

export default { registerHooks, registerPrototypes }
