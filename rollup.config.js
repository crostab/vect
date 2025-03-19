import { subFolders } from '@acq/path'
import json           from '@rollup/plugin-json'
import { readFile }   from 'fs/promises'
import { resolve }    from 'node:path'
import { fileInfo }   from 'rollup-plugin-fileinfo'

const BASE = resolve(process.cwd(), 'packages')
const CATEGORIES = await subFolders(BASE)
const tasks = {}

console.info('Executing', BASE)

for await (const category of CATEGORIES) {
  const projects = await subFolders(resolve(BASE, category))
  for await (const name of projects) {
    const path = resolve(BASE, category, name)
    // tasks[name] = null
    const { dependencies } = JSON.parse(await readFile(resolve(path, 'package.json'), 'utf8'))
    tasks[name] = {
      input: resolve(path, 'src', 'index.js'),
      output: {
        file: resolve(path, 'index.js'),
        format: 'esm',
      },
      external: Object.keys(dependencies ?? {}),
      plugins: [
        json(),
        fileInfo(),
      ],
    }
  }
}

export default Object.values(tasks)