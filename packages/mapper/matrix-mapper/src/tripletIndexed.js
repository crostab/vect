export function* tripletIndexedOf(rows, [ xi, yi, zi ]) {
  for (let row of rows)
    yield [ row[xi], row[yi], row[zi] ]
}

export function* tripletIndexedBy(rows, [ xi, yi, zi ], by) {
  for (let row of rows) {
    const x = row[xi], y = row[yi], z = row[zi]
    if (by(x, y, z)) yield to(x, y, z)
  }
}

export function* tripletIndexedTo(rows, [ xi, yi, zi ], to) {
  for (let row of rows)
    yield to(row[xi], row[yi], row[zi])
}

/**
 *
 * @param {*[][]} rows
 * @param {[*,*,*]} xyz
 * @param {function(*,*,*):boolean} [by]
 * @param {function(*,*,*):*} [to]
 * @returns {Generator<*, void, *>}
 */
export function* tripletIndexed(rows, xyz, by, to) {
  if (!to) { return yield* !by ? tripletIndexedOf(rows, xyz) : tripletIndexedBy(rows, xyz, by) }
  const [ xi, yi, zi ] = xyz
  for (let row of rows) {
    const x = row[xi], y = row[yi], z = row[zi]
    if (by(x, y, z)) yield to(x, y, z)
  }
}