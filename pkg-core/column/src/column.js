import { mapper } from '@vect/vector'

export const column = (mx, y, h) => mapper(mx, r => r[y], h)
