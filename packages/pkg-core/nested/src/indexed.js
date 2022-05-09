import { FUN } from '@typen/enum-data-types'

function* indexedOf(nested) {
  let inner
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      yield [ x, y, inner[y] ]
    }
  }
}

function* indexedBy(nested, by) {
  let inner
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      const v = inner[y]
      if (by(x, y, v)) yield [ x, y, v ]
    }
  }
}

function* indexedTo(nested, to) {
  let inner
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      yield to(x, y, inner[y])
    }
  }
}

function* indexed(nested, by, to) {
  if (!to) { return yield* (!by ? indexedOf(nested) : indexedBy(nested, by)) }
  let inner
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      const v = inner[y]
      if (by(x, y, v)) yield to(x, y, v)
    }
  }
}

/**
 *
 * @param {Object<string,Object<string,any>>} nested
 * @param {function|{ [by]:function, to:function }} [conf]
 * @returns {Generator<*, void, *>}
 */
function* indexedVia(nested, conf) {
  const by = conf?.by, to = conf?.to ?? conf
  yield* typeof by === FUN
    ? typeof to === FUN ? indexed(nested, by, to) : indexedBy(nested, by)
    : typeof to === FUN ? indexedTo(nested, to) : indexedOf(nested)
}

export {
  indexedOf,
  indexedBy,
  indexedTo,
  indexed,
  indexedVia,
  indexedOf as simpleIndexed,
  indexedBy as filterIndexed,
  indexedTo as mappedIndexed,
  indexedVia as filterMappedIndexed
}
