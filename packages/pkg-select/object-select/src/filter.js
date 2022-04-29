export const filter = (o, pred) => {
  const t = {}
  for (let k in o) {
    const v = o[k]
    if (pred(k, v)) t[k] = v
  }
  return t
}

export const filterByValue = (o, pred) => {
  const t = {}
  for (let k in o) {
    const v = o[k]
    if (pred(v)) t[k] = v
  }
  return t
}

