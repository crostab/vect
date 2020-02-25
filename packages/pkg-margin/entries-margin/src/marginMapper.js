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
export const marginMapper = (entries, keyMapper, valueMapper, h, t, l) => {
  const ve = Array(l = l || entries.length), s = l - t
  let ent
  for (--h; h >= 0; h--) ve[h] = [keyMapper((ent = entries[h])[0], h), valueMapper(ent[1], h)]
  for (--l; l >= s; l--) ve[l] = [keyMapper((ent = entries[l])[0], l), valueMapper(ent[1], l)]
  return ve
}


