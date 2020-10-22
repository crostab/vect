import { duozipper } from './seriesZipper'

export const mutazip = (ma, mb, y, fn, l) =>
  duozipper.call({ y, fn, mx: ma, b: l }, ma, mb)
