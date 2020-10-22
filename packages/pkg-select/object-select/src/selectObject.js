export function select(o) {
  const { keys } = this
  const l = keys?.length, ob = {}
  for (let i = 0, k; i < l; i++)
    ob[k = keys[i]] = o[k]
  return ob
}

/**
 *
 * @param {Object} o
 * @param {*[]} keys
 */
export const selectObject = (o, keys) => select.call({ keys }, o)

export const SelectObject = keys => select.bind({ keys })
