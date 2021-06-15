import { duozipper } from './seriesZipper'

export const ColumnMutazip = (y) => (mx, mb, fn, hi) => duozipper.call({ y, fn, mx, hi }, mx, mb)
