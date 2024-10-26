import { mapper } from '@vect/vector-mapper'

export const shift = matrix => mapper(matrix, row => row.shift())
