import { column } from '@vect/column-getter'
import { select as selectRow } from '@vect/vector-select'

/**
 * @param {*[][]} mx
 * @param {number[]} ys
 * @returns {*}
 */
export const select = (mx, ys) => {
  const hi = ys.length
  if (hi === 0) return mx
  if (hi === 1) return column(mx, ys[0])
  return mx.map(row => selectRow(row, ys, hi))
}
