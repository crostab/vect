import { mapper } from '@vect/vector-mapper'

export const shift = matrix => { return mapper(matrix, row => { return row.shift() }) }
