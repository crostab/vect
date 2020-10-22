/**
 *
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {undefined}
 */
export const iterate = function (mx, fn, h, w) {
  h = h || mx?.length, w = w || h && mx[0]?.length
  for (let i = 0, j, r; i < h; i++)
    for (r = mx[i], j = 0; j < w; j++)
      fn.call(this, r[j], i, j)
}
