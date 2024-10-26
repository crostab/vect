/**
 * Iterate through elements on each (x of rows,y of columns) coordinate of a 2d-array.
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {*[]}
 */
export function mapper(mx, fn, h, w) {
  h = h || mx?.length, w = w || h && mx[0]?.length
  const tx = Array(h)
  for (let i = 0, j, r, tr; i < h; i++)
    for (tx[i] = tr = Array(w), r = mx[i], j = 0; j < w; j++)
      tr[j] = fn(r[j], i, j)
  return tx
}


/**
 *
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {undefined}
 */
export function iterate(mx, fn, h, w) {
  h = h || mx?.length, w = w || h && mx[0]?.length
  for (let i = 0, j, r; i < h; i++)
    for (r = mx[i], j = 0; j < w; j++)
      fn.call(this, r[j], i, j)
}

export function mutate(mx, fn, h, w) {
  h = h || mx?.length, w = w || h && mx[0]?.length
  for (let i = 0, j, r; i < h; i++)
    for (j = 0, r = mx[i]; j < w; j++)
      r[j] = fn(r[j], i, j)
  return mx
}

export function selectMutate(mx, ys, fn, h) {
  h = h || mx?.length
  const depth = ys.length
  for (let i = 0, y, r, j; i < h; i++)
    for (y = 0, r = mx[i]; y < depth; y++)
      r[j = ys[y]] = fn(r[j], i, j)
  return mx
}

