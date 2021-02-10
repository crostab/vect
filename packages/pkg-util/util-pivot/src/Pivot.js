import { numSkeleton } from '../utils/skeleton'
import { pivotRecord } from './pivotRecord'
import { pivotSpread } from './pivotSpread'

export class Pivot {
  constructor (x, y, z, mode, filter) {
    this.data = {}
    Object.assign(this.data, numSkeleton())
    Object.assign(this, { x, y, z, mode, filter })
  }

  get configs () {
    const { x, y, z, mode, filter } = this
    return { x, y, z, mode, filter }
  }

  spreadPivot (samples) { return pivotSpread.call(this.data, samples, this.configs) }
  recordPivot (samples) { return pivotRecord.call(this.data, samples, this.configs) }
}
