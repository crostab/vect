/**
 *
 * @param {Object} o
 * @param {*[]} keys
 */
export function select (o, keys) {
  const ob = {}
  for (const k in o)
    if (keys.includes(k))
      ob[k] = o[k]
  return ob
}
