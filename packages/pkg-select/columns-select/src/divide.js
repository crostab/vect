import { rollBunch } from '@vect/vector-index'

/**
 * The indexes should be integer array sorted by ascending.
 * Return selected rows and rest rows.
 * 'Pick' rows is new matrix, and the 'rest' points to the input matrix.
 * @param {*[]} mx
 * @param {number[]} inds - integer array sorted ascending
 * @returns {{pick: *[][], rest: *[][]}} - rest points to altered original matrix, pick is an new matrix.
 */
export const divide = (mx, inds) => {
  const n = inds?.length, ht = mx?.length
  if (n === 0) {
    return { pick: Array(ht), rest: mx }
  }
  if (n === 1) {
    const pick = Array(ht), rest = mx, y = inds[0]
    for (let i = 0; i < ht; i++) { pick[i] = mx[i].splice(y, 1) }
    return { pick, rest }
  }
  else {
    const pick = Array(ht), rest = mx
    for (let i = 0; i < ht; i++) { pick[i] = rollBunch(mx[i], inds).splice(inds[0], n)}
    return { pick, rest }
  }
}

export const separate = (mx, inds) => {
  const n = inds?.length, ht = mx?.length, pick = Array(ht)
  if (n === 0) { return [ pick, mx ] }
  if (n === 1) { for (let i = 0, [ y ] = inds; i < ht; i++) { pick[i] = mx[i].splice(y, 1) } }
  else { for (let i = 0; i < ht; i++) { pick[i] = rollBunch(mx[i], inds).splice(inds[0], n)} }
  return [ pick, mx ]
}
