function selector(o) {
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
export const select = (o, { keys }) => selector.call(keys, o);

export const Select = keys => selector.bind(keys);
