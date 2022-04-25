import { FUN, OBJ } from '@typen/enum-data-types'

export function* simpleIndexed(nested, to) {
  let inner
  if (!nested) return
  for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      yield to(x, y, inner[y])
    }
  }
}

/**
 *
 * @param {Object<string,Object<string,any>>} nested
 * @param {function|{
 * [by]:function,
 * to:function
 * }} conf
 * @returns {Generator<*, void, *>}
 */
export function* indexed(nested, conf) {
  if (typeof conf === FUN) {
    yield* simpleIndexed(nested, conf)
    return
  }
  if (typeof conf === OBJ) {
    const { by, to } = conf
    let inner, v
    if (!nested) return
    for (let x in nested) {
      if ((inner = nested[x])) for (let y in inner) {
        v = inner[y]
        if (by(x, y, v)) yield to(x, y, v)
      }
    }
  }

}
