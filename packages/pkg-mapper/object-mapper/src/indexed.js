import { FUN } from '@typen/enum-data-types'

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

/**
 * @param {Object<string,any>} o
 * @param {function|{ [by]:function, to:function }} [conf]
 * @returns {Generator<*, void, *>}
 */
export function* indexedVia(o, conf) {
  const by = conf?.by, to = conf?.to ?? conf
  yield* typeof by === FUN
    ? typeof to === FUN ? indexed(o, by, to) : indexedBy(o, by)
    : typeof to === FUN ? indexedTo(o, to) : indexedOf(o)
}
