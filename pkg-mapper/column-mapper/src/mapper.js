export function mapper (mx, y, fn, l) {
  l = l || mx && mx.length
  const mt = Array(l)
  for (let r; --l >= 0 && (r = mx[l].slice());) {
    r[y] = fn(r[y], l)
    mt[l] = r
  }
  return mt
}


