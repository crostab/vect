export function* indexedOf(nested) {
  let row
  if (nested) for (let x in nested) {
    if ((row = nested[x])) for (let y in row) {
      yield [ x, y, row[y] ]
    }
  }
}

export function* indexedBy(nested, by) {
  let row
  if (nested) for (let x in nested) {
    if ((row = nested[x])) for (let y in row) {
      const v = row[y]
      if (by(x, y, v)) yield [ x, y, v ]
    }
  }
}

export function* indexedTo(nested, to) {
  let row
  if (nested) for (let x in nested) {
    if ((row = nested[x])) for (let y in row) {
      yield to(x, y, row[y])
    }
  }
}

export function* indexed(nested, by, to) {
  if (!to) { return yield* (!by ? indexedOf(nested) : indexedBy(nested, by)) }
  let row
  if (nested) for (let x in nested) {
    if ((row = nested[x])) for (let y in row) {
      const v = row[y]
      if (by(x, y, v)) yield to(x, y, v)
    }
  }
}