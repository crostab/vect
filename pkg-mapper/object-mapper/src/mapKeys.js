export const mapKeys = (o, fn) => {
  const ob = {}
  for (let k in o)
    if (Object.hasOwnProperty.call(o, k)) ob[fn(k)] = o[k]
  return ob
}
