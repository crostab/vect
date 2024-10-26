export function* entryIndexedOf(rows, [ k, v ]) {
  for (let row of rows) {
    yield [ row[k], row[v] ]
  }
}

export function* entryIndexedBy(rows, [ k, v ], by) {
  for (let row of rows) {
    const x = row[k], y = row[v]
    if (by(x, y)) yield [ x, y ]
  }
}

export function* entryIndexedTo(rows, [ k, v ], to) {
  if (!to) { return yield* entryIndexedOf(rows, [ k, v ])}
  for (let row of rows) {
    yield to(row[k], row[v])
  }
}

/**
 *
 * @param {*[][]|*[][]} rows
 * @param {[*,*]} kv
 * @param {function(*,*):boolean} [by]
 * @param {function(*,*):*} [to]
 * @returns {Generator<*, void, *>}
 */
export function* entryIndexed(rows, kv, by, to) {
  if (!to) { return yield* !by ? entryIndexedOf(rows, kv) : entryIndexedBy(rows, kv, by) }
  const [ k, v ] = kv
  for (let row of rows) {
    const x = row[k], y = row[v]
    if (by(x, y)) yield to(x, y)
  }
}