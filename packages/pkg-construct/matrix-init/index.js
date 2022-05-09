import { nullish } from '@typen/nullish'

export function draft(h, w) {
  const mx = Array(h)
  for (--h; h >= 0; h--) mx[h] = Array(w)
  return mx
}

export function iso(h, w, v) {
  const mx = Array(h)
  for (let i = 0, j, row; i < h; i++)
    for (j = 0, mx[i] = row = Array(w); j < w; j++)
      row[j] = v
  return mx
}

export function init(h, w, fn) {
  const mx = Array(h)
  for (let i = 0, j, row; i < h; i++)
    for (j = 0, mx[i] = row = Array(w); j < w; j++)
      row[j] = fn(i, j)
  return mx
}

export function product(side, head, xyTo) {
  const h = side.length, w = head.length, mx = Array(h)
  for (let i = 0, j, row; i < h; i++) {
    for (j = 0, mx[i] = row = Array(w); j < w; j++) {
      row[j] = xyTo(side[i], head[j], i, j)
    }
  }
  return mx
}

/** @deprecated */
export function starter(h = 1, w = 1, { value, fn }) {
  if (!nullish(value)) return iso(h, w, value)
  if (fn) return init(h, w, fn)
  return draft(h, w)
}

export const shallow = (mx) => mx.map(r => r.slice())
