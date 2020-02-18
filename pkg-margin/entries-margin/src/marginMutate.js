/**
 *
 * @param {*[]} entries
 * @param {function(*,number?):*} keyMapper
 * @param {function(*,number?):*} valueMapper
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - entries length
 * @returns {*[]}
 */
export const marginMutate = (entries, keyMapper, valueMapper, h, t, l) => {
  l = l || entries.length
  let s = l - t, ent
  for (--h; h >= 0; h--) (ent = entries[h])[0] = keyMapper(ent[0], h), ent[1] = valueMapper(ent[1], h)
  for (--l; l >= s; l--) (ent = entries[l])[0] = keyMapper(ent[0], l), ent[1] = valueMapper(ent[1], l)
  return entries
}


