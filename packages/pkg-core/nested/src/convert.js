import { iterate } from './mapper'

export const nestedToRows = (nested) => {
  const rows = []
  iterate(nested, (v, x, y) => {
    rows.push([ x, y, v ])
  })
  return rows
}