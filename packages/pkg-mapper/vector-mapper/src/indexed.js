export function* indexedOf(vec) {
  // for (let i = 0, h = vec?.length; i < h; i++) yield vec[i]
  yield* vec
}

export function* indexedBy(vec, by) {
  for (let i = 0, h = vec?.length, el; i < h; i++)
    if (by(el = vec[i], i)) yield el
}

export function* indexedTo(vec, to) {
  for (let i = 0, h = vec?.length; i < h; i++)
    yield to(vec[i], i)
}

export function* indexed(vec, by, to) {
  if (!to) { return yield* (!by ? indexedOf(vec) : indexedBy(vec, by)) }
  for (let i = 0, h = vec?.length, el; i < h; i++)
    if (by(el = vec[i], i)) yield to(el, i)
}
