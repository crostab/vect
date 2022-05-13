const first = ve => ve[0];
const last = ve => ve[ve.length - 1];
const len = ve => ve === null || ve === void 0 ? void 0 : ve.length;
/**
 * Insert element at current(c) position to projected(next(n)) position.
 * s.t. c <= n
 * @param c
 * @param n
 */

const insertUp = function (c, n) {
  const t = this[c];

  while (c < n) this[c] = this[++c]; // moves forward


  return this[n] = t;
};
/**
 * Insert element at current(c) position to projected(previous(n)) position.
 * s.t. p <= c
 */

const insertDown = function (c, p) {
  const t = this[c];

  while (c > p) this[c] = this[--c]; // moves backward


  return this[p] = t;
};
const swap = function (i, j) {
  const temp = this[i];
  this[i] = this[j];
  return this[j] = temp;
};
const Swap = vec => swap.bind(vec);

export { Swap, first, insertDown, insertUp, last, len, swap };
