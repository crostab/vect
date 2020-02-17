import { mapper as mapper$1, mutate as mutate$1 } from '@vect/vector-mapper';
import { zipper as zipper$1, mutazip as mutazip$1 } from '@vect/vector-zipper';

/**
 *
 * @param {*[]} ar
 * @param {number} [l] - left margin length
 * @param {number} [r] - right margin length
 * @param {number} [w] - array length
 * @returns {*[]}
 */
const copyMargin = (ar, l, r, w) => {
  const ve = Array(w = w || ar.length),
        s = w - r;

  for (--l; l >= 0; l--) ve[l] = ar[l];

  for (--w; w >= s; w--) ve[w] = ar[w];

  return ve;
};

/**
 *
 * @param {*[]} ar
 * @param {function(*)|function(*,number)} fn
 * @param {number} [l] - left margin length
 * @param {number} [r] - right margin length
 * @param {number} [w] - array length
 * @returns {*[]}
 */
const mapMargin = (ar, fn, l, r, w) => {
  const ve = Array(w = w || ar.length),
        s = w - r;

  for (--l; l >= 0; l--) ve[l] = fn(ar[l], l);

  for (--w; w >= s; w--) ve[w] = fn(ar[w], w);

  return ve;
};

const mapper = mapper$1;
const mutate = mutate$1;
const zipper = zipper$1;
const mutazip = mutazip$1;

export { copyMargin, mapMargin, mapper, mutate, mutazip, zipper };
