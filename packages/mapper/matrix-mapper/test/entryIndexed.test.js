import { entryIndexed } from '../src/entryIndexed.js'

const matrix = [
  [ 1, 10, 100 ],
  [ 2, 20, 200 ],
  [ 3, 30, 300 ],
]

const iter = entryIndexed(matrix, [ 1, 2 ])
for (let kv of iter) {
  kv |> console.log
}