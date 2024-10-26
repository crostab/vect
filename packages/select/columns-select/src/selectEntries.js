import { mapper }      from '@vect/vector-mapper'
import { selectEntry } from '@vect/vector-select'

export const selectEntries = (mx, ki, vi) => mapper(mx, row => selectEntry(row, ki, vi))
