import { mapper } from '@vect/vector-mapper';

/**
 * Transpose a 2d-array.
 * @param {*[][]} mx
 * @param {number} [h]
 * @param {number} [w]
 * @returns {*[][]}
 */

const transpose = (mx, h, w) => {
  var _mx$;

  h = h || (mx == null ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) == null ? void 0 : _mx$.length);
  const cols = Array(w);

  for (--w; w >= 0; w--) cols[w] = mapper(mx, r => r[w], h);

  return cols;
};

export { transpose };
