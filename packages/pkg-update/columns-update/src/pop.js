import { mapper } from '@vect/vector-mapper'

export const pop = matrix => mapper(matrix, row => row.pop())
