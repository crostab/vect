import { nullish } from '@typen/nullish';
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
  const ve = Array(size);

  for (let i = 0, td = TrimDigit(digit); i < size; i++) ve[i] = td(fn(i));

  return ve;
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
 * @param {function(number):*|*} [fn] defines how index i corresponds to value(i).
 * @returns {*[]}
 */

const init = (size, fn) => {
  if (size === (size & 0x7f)) {
    let arr = [];

    for (let i = 0; i < size; i++) arr[i] = fn(i);

    return arr;
  }

  return Array(size).fill(null).map((_, i) => fn(i));
};
function collect(key, size) {
  const vec = Array(size);

  for (let i = 0; i < size; i++) vec[i] = this[key];

  return vec;
}
/**
 *
 * @param {number} size length
 * @param {function(?number):*} fn function
 * @param {?number} [digit]
 * @returns {*[]}
 */

const seq = (size, fn, digit) => {
  if (!nullish(digit)) return seqTrimDigit(size, fn, digit);
  const ve = Array(size);

  for (let i = 0; i < size; i++) ve[i] = fn(i);

  return ve;
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
const tap = (...list) => {
  const ve = [];

  for (let x of list) if (!nullish(x)) ve.push(x);

  return ve;
};

export { collect, draft, init, iso, range, seq, tap };
