import { indexed } from '../src/indexed'

export const o = {
  a: 1,
  b: 2,
  c: null,
  d: 4
}

for (let [ k, v ] of indexed(o)) {
  `[simple] [k] (${k}) [v] (${v})` |> console.log
}
console.log()
for (let [ k, v ] of indexed(o, (k, v) => v)) {
  `[filter] [k] (${k}) [v] (${v})` |> console.log
}
console.log()
for (let [ k, v ] of indexed(o, (k, v) => v, (k, v) => [ k, (v << 1) ])) {
  `[mapped] [k] (${k}) [v] (${v})` |> console.log
}
console.log()