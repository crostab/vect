import { ACCUM, COUNT, INCRE, SUM } from '../resources/PivotModes'
import { acid, arid, expand }       from '../utils/indexer'

export function pivotSpread (samples, { x, y, z, filter, mode = SUM }) {
  let notate = createNotate(x, y, z, mode, filter).bind(this)
  for (let sample of samples)
    notate(sample)
  return this
}

const createNotate = (x, y, z, mode, filter) => {
  const record = selectSpread(mode)
  return !filter
    ? function (r) { record.call(this, r[x], r[y], r[z]) }
    : function (r) { (filter(r[z]) ? record : expand).call(this, r[x], r[y], r[z]) }
}

export const selectSpread = mode => {
  if (mode === INCRE) return function (x, y, z) { this.m[arid.call(this, x)][acid.call(this, y)] += z }
  if (mode === ACCUM) return function (x, y, z) { this.m[arid.call(this, x)][acid.call(this, y)].push(z) }
  if (mode === COUNT) return function (x, y) { this.m[arid.call(this, x)][acid.call(this, y)]++ }
  return expand
}

