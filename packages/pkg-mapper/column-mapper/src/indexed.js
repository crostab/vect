export function* indexedOf(mx, y) {
  for (let h = mx.length, i = 0; i < h; i++)
    yield mx[i][y]
}

export function* indexedBy(mx, y, by) {
  for (let h = mx.length, i = 0, v; i < h; i++)
    if (by(v = mx[i][y], i)) yield mx[i][y]
}

export function* indexedTo(mx, y, to) {
  for (let h = mx.length, i = 0; i < h; i++)
    yield to(mx[i][y], i)
}

export function* indexed(mx, y, by, to) {
  for (let h = mx.length, i = 0, v; i < h; i++)
    if (by(v = mx[i][y], i)) yield to(v, i)
}

