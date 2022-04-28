import { FUN } from '@typen/enum-data-types'

export function* simpleIndexed(o) {
  if (o) for (let k in o) {
    yield [k, o[k]]
  }
}

export function* filterIndexed(o, filter) {
  if (o) for (let k in o) {
    const v = o[k]
    if (filter(k, v)) yield [k, v]
  }
}

export function* mappedIndexed(o, mapper) {
  if (o) for (let k in o) {
    yield mapper(k, o[k])
  }
}

export function* filterMappedIndexed(o, filter, mapper) {
  if (o) for (let k in o) {
    const v = o[k]
    if (filter(k, v)) yield mapper(k, v)
  }
}

/**
 *
 * @param {Object<string,Object<string,any>>} o
 * @param {function|{ [by]:function, to:function }} [conf]
 * @returns {Generator<*, void, *>}
 */
export function* indexed(o, conf) {
  const by = conf?.by, to = conf?.to ?? conf
  if (typeof by === FUN) {
    if (typeof to === FUN) {
      yield* filterMappedIndexed(o, by, to)
    } else {
      yield* filterIndexed(o, by)
    }
  } else {
    if (typeof to === FUN) {
      yield* mappedIndexed(o, to)
    } else {
      yield* simpleIndexed(o)
    }
  }
}
