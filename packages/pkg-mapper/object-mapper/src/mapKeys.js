export function mapKeys(o, fn) {
  const ob = {}
  for (let k in o) ob[fn.call(this, k)] = o[k]
  return ob
}
