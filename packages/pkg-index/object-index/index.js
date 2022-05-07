export const first = o => {
  for (let k in o) return k
}
export const firstValue = o => o[first(o)]
export const firstEntry = o => {
  const k = first(o)
  return [ k, o[k] ]
}

export const last = o => {
  let k
  for (let x in o) { k = x }
  return k
}
export const lastValue = o => o[last(o)]
export const lastEntry = o => {
  const k = last(o)
  return [ k, o[k] ]
}
export const len = (o) => {
  let hi = 0
  for (let k in o) hi++
  return hi
}

export const isEmpty = (o) => {
  for (let k in o) return false
  return true
}