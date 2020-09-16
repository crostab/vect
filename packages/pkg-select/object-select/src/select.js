/**
 *
 * @param {Object} o
 * @param {*[]} keys
 */
export function select (o, keys) {
  const ob = {}, l = keys?.length
  for (let i = 0, k; i < l; i++)
    ob[k = keys[i]] = o[k]
  return ob
}
