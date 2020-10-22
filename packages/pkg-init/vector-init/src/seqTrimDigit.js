import { TrimDigit } from '../util/trimDigit'

export const seqTrimDigit = (size, fn, digit = 2) => {
  const ve = Array(size)
  for (let i = 0, td = TrimDigit(digit); i < size; i++) ve[i] = td(fn(i))
  return ve
}
