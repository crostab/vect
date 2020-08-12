export const certSize = (mx, h, w) => {
  if (!h) h = mx?.length
  if (!w) w = h && mx[0]?.length
  return [h, w]
}

