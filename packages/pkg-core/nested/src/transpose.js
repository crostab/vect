import { iterate } from './mapper'

export const transpose = (nested) => {
  const o = {}
  iterate(nested, (v, x, y) => {
    const xToV = o[y] ?? (o[y] = {})
    xToV[x] = v
  })
  return o
}