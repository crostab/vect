export const isMatrix = mx => Array.isArray(mx) && Array.isArray(mx[0])

export const size = mx => {
  let h, r
  return mx && (h = mx.length) && (r = mx[0])
    ? [ h, r.length ]
    : [ h, r ]
}

export const height = mx => mx?.length

export const width = mx => mx?.length ? mx[0]?.length : null

export const certSize = (mx, h, w) => {
  if (!h) h = mx?.length
  if (!w) w = h && mx[0]?.length
  return [ h, w ]
}


/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */
export const coins = mx => isMatrix(mx)
  ? mx[0].map((_, i) => i)
  : []



