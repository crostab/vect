export function mapEntries (jso, fn, l) {
  const ob = {}, ents = Object.entries(jso)
  l = l || ents.length
  for (let i = 0, k, v; i < l; i++) {
    [k, v] = fn(ents[i])
    ob[k] = v
  }
  return ob
}
