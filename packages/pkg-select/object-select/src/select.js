import { keys, vals } from '@vect/object-index'

export function select(o) {
  const hi = this?.length
  if (!hi) return keys(o)
  const ob = {}
  for (let i = 0, k; i < hi; i++) ob[k = this[i]] = o[k]
  return ob
}

export function values(o) {
  const hi = this?.length
  if (!hi) return vals(o)
  const ve = Array(hi)
  for (let i = 0; i < hi; i++) ve[i] = o[this[i]]
  return ve
}

/**
 *
 * @param {Object} o
 * @param {*[]} keys
 */
export const selectObject = (o, keys) => select.call(keys, o)

export const SelectObject = keys => select.bind(keys)

export const selectValues = (o, keys) => values.call(keys, o)

export const SelectValues = keys => values.bind(keys)

