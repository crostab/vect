import { ACCUM, COUNT, INCRE, SUM } from '../resources/PivotModes'

export function pivotRecord (samples, { x, y, z, filter, mode = SUM }) {
  let notate = createNotate(x, y, z, mode, filter).bind(this)
  for (let sample of samples)
    notate(sample)
  return this
}

const createNotate = (x, y, z, mode, filter) => {
  const recorder = selectRecord(mode)
  return !filter
    ? function (r) { recorder.call(this, r[x], r[y], r[z]) }
    : function (r) { if (filter(r[z])) recorder.call(this, r[x], r[y], r[z]) }
}

export const selectRecord = mode => {
  if (mode === INCRE) return function (x, y, v) {
    const { m, s, b } = this, row = m[s.indexOf(x)]
    if (row) row[b.indexOf(y)] += v
  }
  if (mode === ACCUM) return function (x, y, v) {
    const { m, s, b } = this, row = m[s.indexOf(x)]
    if (row) row[b.indexOf(y)].push(v)
  }
  if (mode === COUNT) return function (x, y) {
    const { m, s, b } = this, row = m[s.indexOf(x)]
    if (row) row[b.indexOf(y)]++
  }
  return () => {}
}
