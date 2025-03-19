import { nullish } from '@typen/nullish';
import { round } from '@aryth/math';

function trimDigit (n) { return round(n * this.m) / this.m }

/**
 *
 * @param {number} d - digits
 * @returns {function(number):number}
 * @constructor
 */
const TrimDigit = d => {
  return (d = ~~d)
    ? trimDigit.bind({ m: 10 ** ~~d })
    : round
};

const seqTrimDigit = (size, fn, digit = 2) => {
  const ve = Array(size);
  for (let i = 0, td = TrimDigit(digit); i < size; i++) ve[i] = td(fn(i));
  return ve
};

// noinspection DuplicatedCode


function draft(size) { return Array(size) }

function iso(size, value) {
  if (size === (size & 0x7f)) {
    const arr = Array(size);
    for (let i = 0; i < size; i++) arr[i] = value;
    return arr
  }
  return Array(size).fill(value)
}

function init(size, to) {
  if (size === (size & 0x7f)) {
    let vec = Array(size);
    for (let i = 0; i < size; i++) vec[i] = to(i);
    return vec
  }
  return Array(size).fill(null).map((_, i) => to(i))
}

function collect(key, size) {
  const vec = Array(size);
  for (let i = 0; i < size; i++) vec[i] = this[key];
  return vec
}

function gather(iter) {
  const vec = Array();
  for (let x of iter) vec.push(x);
  return vec
}

function tap(...list) {
  const vec = Array(list.length);
  for (let x of list) if (!nullish(x)) vec.push(x);
  return vec
}

function seq(size, fn, digit) {
  if (!nullish(digit)) return seqTrimDigit(size, fn, digit)
  const vec = Array(size);
  for (let i = 0; i < size; i++) vec[i] = fn(i);
  return vec
}

/**
 *
 * @param {number} n
 * @param {number} [m]
 * @returns {number[]}
 */
function indexes(n, m) {
  function upward(lo, hi) {
    const n = hi - lo, vec = Array(n);
    for (let i = 0; i < n; i++) vec[i] = lo++;
    return vec
  }
  function downward(hi, lo) {
    const n = hi - lo, vec = Array(n);
    for (let i = n - 1; i >= 0; i--) vec[i] = lo++;
    return vec
  }
  return nullish(m)
    ? n >= 0 ? upward(0, n) : downward(0, n)
    : m >= n ? upward(n, m) : downward(n, m)
}

class Range {
  lo = 0
  hi = 0
  constructor(lo, hi) {
    this.lo = lo;
    this.hi = hi;
  }
  static build(lo, hi) {return new Range(lo, hi) }
  [Symbol.iterator]() { return this }
  next() { return this.lo < this.hi ? { done: false, value: this.lo++ } : { done: true, value: void 0 } }
}

function range(lo, hi) { return new Range(lo, hi) }

export { Range, collect, draft, gather, indexes, init, iso, range, seq, tap };
