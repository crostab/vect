import { FUN } from '@typen/enum-data-types'

export function* simpleIndexed(nested) {
  let inner
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      yield [x, y, inner[y]]
    }
  }
}

export function* filterIndexed(nested, filter) {
  let inner
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      const v = inner[y]
      if (filter(x, y, v)) yield [x, y, v]
    }
  }
}

export function* mappedIndexed(nested, mapper) {
  let inner
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      yield mapper(x, y, inner[y])
    }
  }
}

export function* filterMappedIndexed(nested, filter, mapper) {
  let inner
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      const v = inner[y]
      if (filter(x, y, v)) yield mapper(x, y, v)
    }
  }
}

/**
 *
 * @param {Object<string,Object<string,any>>} nested
 * @param {function|{
 * [by]:function,
 * to:function
 * }} [conf]
 * @returns {Generator<*, void, *>}
 */
export function* indexed(nested, conf) {
  const by = conf?.by, to = conf?.to ?? conf
  if (typeof by === FUN) {
    if (typeof to === FUN) {
      yield* filterMappedIndexed(nested, by, to)
    } else {
      yield* filterIndexed(nested, by)
    }
  } else {
    if (typeof to === FUN) {
      yield* mappedIndexed(nested, to)
    } else {
      yield* simpleIndexed(nested)
    }
  }
}
