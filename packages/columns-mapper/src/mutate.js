export function mutate (mx, y, fn, l) {
  l = l || mx && mx.length
  for (let r; --l >= 0 && (r = mx[l]);)
    r[y] = fn(r[y], l)
  return mx
}
