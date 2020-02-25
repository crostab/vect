/**
 * Iterate through elements on each (x of rows,y of columns) coordinate of a 2d-array.
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} h
 * @param {number} w
 * @returns {*[]}
 */
export const mapper = (mx, fn, h, w) => {
  h = h || mx?.length, w = w || h && mx[0]?.length
  const tx = Array(h)
  for (let i = 0, j, r, tr; i < h; i++)
    for (tx[i] = tr = Array(w), r = mx[i], j = 0; j < w; j++)
      tr[j] = fn(r[j], i, j)
  return tx
}
