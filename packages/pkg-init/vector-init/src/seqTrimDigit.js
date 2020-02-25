import { TrimDigit } from '../util/trimDigit'

export const seqTrimDigit = (size, fn, digit = 2) => {
  const ar = Array(size)
  for (let i = 0, td = TrimDigit(digit); i < size; i++) ar[i] = td(fn(i))
  return ar
}
