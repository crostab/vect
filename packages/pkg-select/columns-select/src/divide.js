import { mapper, iterate } from '@vect/vector-mapper'
import { divide as divideRow } from '@vect/vector-select'

/**
 * The indexes should be integer array sorted by ascending.
 * Return selected rows and rest rows.
 * 'Pick' rows is new matrix, and the 'rest' points to the input matrix.
 * @param {*[]} mx
 * @param {number[]} indexes - integer array sorted ascending
 * @param {number} [hi] - length of indexes
 * @returns {{pick: *[][], rest: *[][]}} - rest points to altered original matrix, pick is an new matrix.
 */
export const divide = (mx, indexes, hi) => {
  hi = hi || indexes.length
  let h = mx.length, y
  if (hi === 0) return { pick: Array(h), rest: mx }
  const pick = Array(h)
  if (hi === 1) return [y] = indexes, {
    pick: pick,
    rest: mapper(mx, (row, i) => (pick[i] = row.splice(y, 1), row), h)
  }
  const rest = mx
  iterate(mx, (row, i) => {({ pick: pick[i], rest: rest[i] } = divideRow(row, indexes, hi))})
  return { pick, rest }
}
