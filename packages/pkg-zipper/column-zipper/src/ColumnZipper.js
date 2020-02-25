import { duozipper } from './seriesZipper'

export const ColumnZipper = (y) =>
  (ma, mb, fn, l) => duozipper.call({ y, fn, b: l }, ma, mb)




