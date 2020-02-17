import { duozipper } from './seriesZipper'

export const zipper = (ea, eb, keyFn, valFn, l) =>
  duozipper.call({ key: keyFn, value: valFn, hi: l }, ea, eb)
