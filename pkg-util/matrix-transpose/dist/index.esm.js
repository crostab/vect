import { mapper } from '@vect/vector-mapper';
import { size } from '@vect/matrix-size';

/**
 * Transpose a 2d-array.
 * @param {*[][]} mx
 * @returns {*[][]}
 */

const transpose = mx => {
  let [h, w] = size(mx);
  let cols = Array(w);

  for (--w; w >= 0; w--) cols[w] = mapper(mx, r => r[w], h);

  return cols;
};

export { transpose };
