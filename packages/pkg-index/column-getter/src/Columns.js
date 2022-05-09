import { mapper } from '@vect/vector-mapper'

const columns = function (y, h) {
  return mapper(this, r => r[y], h)
}

export const Columns = mx => columns.bind(mx)
