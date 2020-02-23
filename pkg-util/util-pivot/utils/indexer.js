import { init as iniV } from '@vect/vector-init'
import { mapper } from '@vect/vector-mapper'

export const arid = function (x) {
  let i = this.s.indexOf(x)
  if (i >= 0) return i
  return i + (this.m.push(iniV(this.b.length, this.n)), this.s.push(x))
}
export const acid = function (y) {
  let j = this.b.indexOf(y)
  if (j >= 0) return j
  return j + (mapper(this.m, row => row.push(this.n()), this.s.length), this.b.push(y))
}
export const expand = function (x, y) { arid.call(this, x), acid.call(this, y) }

