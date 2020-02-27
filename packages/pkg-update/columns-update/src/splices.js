import { splices as splicesRow } from '@vect/vector-update'
import { mapper } from '@vect/vector-mapper'

export const splices = (mx, ys) => {
  const hi = ys.length
  if (hi === 0) return mx
  if (hi === 1) return mapper(mx, r => (r.splice(ys[0], 1), r))
  return mx.map(row => splicesRow(row, ys, hi))
}
