import { getOr, getOrVec } from '@vect/object-index'

export function appendValue(k, v) {
  return getOrVec.call(this, k).push(v)
}

export function assignValue(k, i, v) {
  getOr.call(this, k)[i] = v
}