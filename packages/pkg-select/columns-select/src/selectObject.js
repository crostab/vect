import { iterate } from '@vect/vector-mapper'

export const selectObject = (mx, keyInd, valInd) => {
  let o = {}, x
  iterate(mx, row => {
    if (!((x = row[keyInd]) in o)) o[x] = row[valInd]
  })
  return o
}
