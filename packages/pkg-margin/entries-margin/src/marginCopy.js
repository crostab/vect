/**
 *
 * @param {*[]} entries
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - entries length
 * @returns {*[]}
 */
export const marginCopy = (entries, h, t, l) => {
  const kvs = Array(l = l ?? entries?.length), s = l - t
  let ent
  for (--h; h >= 0; h--) kvs[h] = [(ent = entries[h])[0], ent[1]]
  for (--l; l >= s; l--) kvs[l] = [(ent = entries[l])[0], ent[1]]
  return kvs
}



