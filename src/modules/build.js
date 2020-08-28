import { promises, existsSync, mkdirSync } from 'fs'

export default async function build(module) {
  const jsonModule = JSON.stringify(module, null, 2)
  const dir = `dist/${module.name}`

  if (!existsSync(dir)) mkdirSync(dir)

  return await promises.writeFile(`${dir}/module.json`, jsonModule, { encoding: 'utf-8' })
}
