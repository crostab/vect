/**
 * Insert element at current(c) position to projected(next(n)) position.
 * s.t. c <= n
 * @param c
 * @param n
 */
export const insertUp = function (c, n) {
  const t = this[c]
  while (c < n) this[c] = this[++c] // moves forward
  return this[n] = t
}

/**
 * Insert element at current(c) position to projected(previous(n)) position.
 * s.t. p <= c
 */
export const insertDown = function (c, p) {
  const t = this[c]
  while (c > p) this[c] = this[--c] // moves backward
  return this[p] = t
}
