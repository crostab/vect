import '@typen/nullish';
import { round } from '@aryth/math';

function trimDigit(n) {
  return round(n * this.m) / this.m;
}
/**
 *
 * @param {number} d - digits
 * @returns {function(number):number}
 * @constructor
 */


const TrimDigit = d => {
  return (d = ~~d) ? trimDigit.bind({
    m: 10 ** ~~d
  }) : round;
};

const seqTrimDigit = (size, fn, digit = 2) => {
  const ar = Array(size);

  for (let i = 0, td = TrimDigit(digit); i < size; i++) ar[i] = td(fn(i));

  return ar;
};

const draft = size => Array(size);
const iso = (size, value) => {
  if (size === (size & 0x7f)) {
    const arr = [];

    for (let i = 0; i < size; i++) arr[i] = value;

    return arr;
  }

  return Array(size).fill(value);
};
/**
 * Create an array.
 * @param {number} size Integer starts at zero.
 * @param {function(number):*|*} [fn] Defines the how index i decides value(i).
 * @returns {number[]} The
 */

const init = (size, fn) => {
  if (size === (size & 0x7f)) {
    let arr = [];

    for (let i = 0; i < size; i++) arr[i] = fn(i);

    return arr;
  }

  return Array(size).fill(null).map((_, i) => fn(i));
};
/**
 *
 * @param {number} size length
 * @param {function(?number):*} fn function
 * @param {?number} [digit]
 * @returns {*[]}
 */

const seq = (size, fn, digit) => {
  if (digit !== null && digit !== void 0) return seqTrimDigit(size, fn, digit);
  const ar = Array(size);

  for (let i = 0; i < size; i++) ar[i] = fn(i);

  return ar;
};
const range = (start, end) => {
  let v, l;

  if (start <= end) {
    l = end - start, v = new Array(++l);

    for (let i = 0; i < l; i++) v[i] = start++;
  } else {
    l = start - end, v = new Array(++l);

    for (--l; l >= 0; l--) v[l] = end++;
  }

  return v;
};

export { draft, init, iso, range, seq };
