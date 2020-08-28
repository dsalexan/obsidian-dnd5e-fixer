import get from 'lodash-es/get'

export function loadFromToken(token) {
  const actorLink = get(token, 'data.actorLink')
  const source = actorLink ? token.actor : token

  return get(source, 'data.flags.may.shared-hotbar', {})
}

export function saveToToken(token, hotbar) {
  const actorLink = get(token, 'data.actorLink', false)
  const source = actorLink ? token.actor : token

  // console.log('saveToToken', actorLink, source, hotbar, 'oldValue:', source.getFlag('may', 'shared-hotbar'))
  source.setFlag('may', 'shared-hotbar', hotbar)
}

export default { loadFromToken, saveToToken }
