import { columnZipper } from './ColumnZipper'

export const zipper = (ma, mb, y, fn, l) =>
  columnZipper.call({ y }, ma, mb, fn, l)


