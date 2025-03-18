import { duozipper } from './seriesZipper.js'

export const ColumnMutazip = (y) => (mx, mb, fn, hi) => duozipper.call({ y, fn, mx, hi }, mx, mb)
