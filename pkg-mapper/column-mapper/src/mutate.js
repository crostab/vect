import { columnMutate } from './ColumnMutate'

export const mutate = (mx, y, fn, l) =>
  columnMutate.call({ y }, mx, fn, l)
