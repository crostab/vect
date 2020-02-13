export const mapper = (o, fn) => {
  const ob = {}
  for (let k in o)
    if (Object.hasOwnProperty.call(o, k)) ob[k] = fn(o[k])
  return ob
}

