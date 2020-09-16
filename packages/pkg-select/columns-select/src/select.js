import { mapper as columnMap } from '@vect/column-mapper'
import { select as selectRow } from '@vect/vector-select'

/**
 * @param {*[][]} mx
 * @param {number[]} ys
 * @returns {*[][]}
 */
export const select = (mx, ys) => {
  const hi = ys?.length ?? 0
  if (hi === 0) return mx
  if (hi === 1) return columnMap(mx, ys[0], x => [x])
  return mx.map(row => selectRow(row, ys, hi))
}


