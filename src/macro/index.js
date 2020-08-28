/* global game */

export async function runCompendium(macroPath) {
  const pack = macroPath.split('.').slice(0, -1).join('.')
  const [uuid] = macroPath.split('.').slice(-1)

  const macro = await game.packs.get(pack).getEntity(uuid)
  if (!macro) return

  macro.execute()
}

export default { runCompendium }
