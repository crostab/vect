export const firstKey = o => {
  for (let k in o) return k
}
export const firstValue = o => o[firstKey(o)]
export const firstEntry = o => {
  const k = firstKey(o)
  return [ k, o[k] ]
}

export const lastKey = o => {
  let k
  for (let x in o) { k = x }
  return k
}
export const lastValue = o => o[lastKey(o)]
export const lastEntry = o => {
  const k = lastKey(o)
  return [ k, o[k] ]
}