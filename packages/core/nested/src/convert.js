import { iterate } from './mapper'

export const nestedToRows = (nested) => {
  const inners = []
  iterate(nested, (v, x, y) => {
    inners.push([x, y, v])
  })
  return inners
}