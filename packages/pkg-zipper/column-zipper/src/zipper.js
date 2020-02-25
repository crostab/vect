import { duozipper } from './seriesZipper'

export const zipper = (ma, mb, y, fn, l) =>
  duozipper.call({ y, fn, b: l }, ma, mb)


