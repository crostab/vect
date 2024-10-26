export function mutate(o, fn) {
  for (let k in o) o[k] = fn.call(this, o[k])
  return o
}
