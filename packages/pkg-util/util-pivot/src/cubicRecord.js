import { mutazip }             from '@vect/vector-zipper'
import { ACCUM, COUNT, INCRE } from '../resources/PivotModes'

/**
 *
 * @param {*[][]} samples
 * @param {number} x
 * @param {number} y
 * @param {{index,mode}[]} band
 * @param filter
 * @returns {cubicRecord}
 */
export function cubicRecord (samples, {  x, y, band, filter }) {
  const depth = band.length
  const notate = createNotate(x, y, band, filter, depth).bind(this)
  for (let sample of samples) {
    notate(sample)
  }
  return this
}

const createNotate = (x, y, band, filter, depth) => {
  band.forEach(o => o.update = selectUpdater(o.mode))
  return !filter
    ? function (sample) { spread.call(this, sample[x], sample[y], sample, band, depth) }
    : function (sample) { if (filter(sample)) spread.call(this, sample[x], sample[y], sample, band, depth)}
}

const spread = function (x, y, sample, band, depth) {
  const { m, s, b } = this
  let vec
  const r = m[s.indexOf(x)]
  if (r) vec = r[b.indexOf(y)]
  if (vec) mutazip(
    vec, band,
    (target, { index, update }) => update(target, sample[index]),
    depth
  )
}

const selectUpdater = (mode) => {
  if (mode === INCRE) return (target, value) => target + value
  if (mode === ACCUM) return (target, value) => (target.push(value), target)
  if (mode === COUNT) return (target) => target++
  return () => {}
}
