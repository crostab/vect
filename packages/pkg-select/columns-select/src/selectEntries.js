import { mapper } from '@vect/vector-mapper'
import { selectEntry } from '@vect/vector-select'

export const selectEntries = (mx, keyInd, valInd) =>
  mapper(mx, row => selectEntry(row, keyInd, valInd))
