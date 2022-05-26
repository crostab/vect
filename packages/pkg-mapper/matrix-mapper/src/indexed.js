export function* indexedOf(mx) {
  if (mx) for (let i = 0, h = mx.length; i < h; i++) {
    const row = mx[i]
    if (row) for (let j = 0, w = row.length; j < w; j++) {
      yield [ row[j], i, j ]
    }
  }
}

export function* indexedBy(mx, by) {
  if (mx) for (let i = 0, h = mx.length; i < h; i++) {
    const row = mx[i]
    if (row) for (let j = 0, w = row.length; j < w; j++) {
      const val = row[j]
      if (by(val, i, j)) yield [ val, i, j ]
    }
  }
}

export function* indexedTo(mx, to) {
  if (!to) { return yield* indexedOf(mx) }
  if (mx) for (let i = 0, h = mx.length; i < h; i++) {
    const row = mx[i]
    if (row) for (let j = 0, w = row.length; j < w; j++) {
      yield to(row[j], i, j)
    }
  }
}

export function* indexed(mx, by, to) {
  if (!to) { return yield* (!by ? indexedOf(mx) : indexedBy(mx, by)) }
  if (mx) for (let i = 0, h = mx.length; i < h; i++) {
    const row = mx[i]
    if (row) for (let j = 0, w = row.length; j < w; j++) {
      const val = row[j]
      if (by(val, i, j)) yield to(val, i, j)
    }
  }
}
