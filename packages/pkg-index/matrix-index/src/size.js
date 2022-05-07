export const size = mx => {
  let h, r
  return mx && (h = mx.length) && (r = mx[0])
    ? [ h, r.length ]
    : [ h, r ]
}

export const height = mx => mx?.length

export const width = mx => {
  let r
  return height(mx) && (r = mx[0]) ? r.length : r
}

export const certSize = (mx, h, w) => {
  if (!h) h = mx?.length
  if (!w) w = h && mx[0]?.length
  return [ h, w ]
}


