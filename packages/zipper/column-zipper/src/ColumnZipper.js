import { duozipper } from './seriesZipper.js'

export const ColumnZipper = (y) => (ma, mb, fn, hi) => duozipper.call({ y, fn, hi }, ma, mb)




