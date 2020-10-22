import { duozipper } from './seriesZipper'

export const ColumnMutazip = (y) =>
  (ma, mb, fn, l) => duozipper.call({ y, fn, mx: ma, b: l }, ma, mb)
