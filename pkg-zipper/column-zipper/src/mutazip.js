import { columnMutazip } from './ColumnMutazip'

export const mutazip = (ma, mb, y, fn, l) =>
  columnMutazip.call({ y }, ma, mb, fn, l)
