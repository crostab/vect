import { mapper } from '@vect/vector-mapper'

export const column = (mx, c, h) => mapper(mx, r => r[c], h)

