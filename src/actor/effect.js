/* global ui */
import get from 'lodash-es/get'
import { runCompendium } from '../macro'

function getExpressions(item) {
  return new Promise((resolve) => {
    if (!get(item, 'flags.obsidian.activeEffect', false)) return resolve([])

    const effects = get(item, 'flags.obsidian.effects', [])

    effects.map((effect) => {
      const expressions = effect.components.filter((component) => component.type === 'expression')
      if (!expressions) return resolve([])
      return resolve(expressions)
    })
  })
}

export function onCreateOwnedItem(actor, item) {
  getExpressions(item).then((expressions) => {
    expressions.map((expression) => {
      const command = expression.expr[0] === '@' ? expression.expr : false
      const cleanup = expression.flavour[0] === '@' ? expression.flavour : false

      if (!command) return

      const [at, path] = command.split(/[\[\]]/gi)

      if (at === '@Compendium') runCompendium(path)
      else return ui.notifications.error(`Script Effect behaviour not implemented for "${at}"`)
    })
  })
}

export function onDeleteOwnedItem(actor, item) {
  getExpressions(item).then((expressions) => {
    expressions.map((expression) => {
      const command = expression.expr[0] === '@' ? expression.expr : false
      const cleanup = expression.flavour[0] === '@' ? expression.flavour : false

      if (!cleanup) return

      const [at, path] = cleanup.split(/[\[\]]/gi)

      if (at === '@Compendium') runCompendium(path)
      else return ui.notifications.error(`Script Effect behaviour not implemented for "${at}"`)
    })
  })
}

export default { onCreateOwnedItem, onDeleteOwnedItem }
