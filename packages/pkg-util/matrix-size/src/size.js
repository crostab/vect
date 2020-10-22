export const size = mx => {
  let h, r
  return mx && (h = mx.length) && (r = mx[0])
    ? [h, r.length]
    : [h, r]
}


