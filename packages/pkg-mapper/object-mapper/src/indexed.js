export function* indexedOf(o) {
  if (o) for (let k in o) {
    yield [ k, o[k] ]
  }
}

export function* indexedBy(o, by) {
  if (o) for (let k in o) {
    const v = o[k]
    if (by(k, v)) yield [ k, v ]
  }
}

export function* indexedTo(o, to) {
  if (o) for (let k in o) {
    yield to(k, o[k])
  }
}

export function* indexed(o, by, to) {
  if (!to) { return yield* (!by ? indexedOf(o) : indexedBy(o, by)) }
  if (o) for (let k in o) {
    const v = o[k]
    if (by(k, v)) yield to(k, v)
  }
}