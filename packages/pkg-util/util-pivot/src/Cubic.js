import { numSkeleton } from '../utils/skeleton'
import { cubicRecord } from './cubicRecord'
import { cubicSpread } from './cubicSpread'

export class Cubic {
  constructor (x, y, band, filter) {
    this.data = {}
    Object.assign(this.data, numSkeleton())
    Object.assign(this, { x, y, band, filter })
  }

  get configs () {
    const { x, y, band, filter } = this
    return { x, y, band, filter }
  }

  spreadCubic (samples) { return cubicSpread.call(this.data, samples, this.configs) }
  recordCubic (samples) { return cubicRecord.call(this.data, samples, this.configs) }
}
