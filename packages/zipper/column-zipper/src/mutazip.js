import { duozipper } from './seriesZipper'

export const mutazip = (mx, mb, y, fn, hi) => { return duozipper.call({ y, fn, mx, hi }, mx, mb) }
