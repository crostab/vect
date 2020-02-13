export function mapEntries (o, fn, l) {
  const ob = {}, ents = Object.entries(o)
  l = l || ents.length
  for (let i = 0, k, v; i < l; i++) {
    [k, v] = fn(ents[i], i)
    ob[k] = v
  }
  return ob
}
