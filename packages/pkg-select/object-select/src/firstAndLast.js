/** @deprecated use equivalent from @vect/object-index */
export const firstKey = o => {
  for (let k in o) return k
}
/** @deprecated use equivalent from @vect/object-index */
export const firstValue = o => o[firstKey(o)]
/** @deprecated use equivalent from @vect/object-index */
export const firstEntry = o => {
  const k = firstKey(o)
  return [ k, o[k] ]
}
/** @deprecated use equivalent from @vect/object-index */
export const lastKey = o => {
  let k
  for (let x in o) { k = x }
  return k
}
/** @deprecated use equivalent from @vect/object-index */
export const lastValue = o => o[lastKey(o)]
/** @deprecated use equivalent from @vect/object-index */
export const lastEntry = o => {
  const k = lastKey(o)
  return [ k, o[k] ]
}