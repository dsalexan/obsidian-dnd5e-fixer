/* global game, ui, duplicate */

export async function clear() {
  await Promise.all(Object.entries(game.user.data.hotbar).map(([key]) => game.user.assignHotbarMacro(null, key)))
}

export async function load(data) {
  const currentHotbar = duplicate(game.user.data.hotbar) // in case we need to undo

  await clear()

  let macrosNotFound = 0
  try {
    await Promise.all(
      Object.entries(data).map(([key, value]) => {
        if (!value) return

        const macro = game.macros.get(value)

        if (!macro) {
          macrosNotFound++
          console.error('MAY, Shared Hotbar |', 'Could not find macro', value, data)
        } else {
          return game.user.assignHotbarMacro(macro, key)
        }
      })
    )
  } catch (error) {
    console.error('MAY, Shared Hotbar |', error, data)
    ui.notifications.error(`MAY — Could't load hotbar.`)

    await load(currentHotbar)
  }

  if (macrosNotFound > 0) ui.notifications.warn(`MAY — Some macros were not found on loading the hotbar.`)
}

export default { clear, load }
