import { size } from '@vect/matrix-size'

/**
 *
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {undefined}
 */
export const iterate = function (mx, fn, h, w) {
  if (!h || !w) [h, w] = size(mx)
  for (let i = 0, j, r; i < h; i++)
    for (r = mx[i], j = 0; j < w; j++)
      fn.call(this, r[j], i, j)
}
