export const mapper = (jso, fn) => {
  const ob = {}
  for (let k in jso)
    if (Object.hasOwnProperty.call(jso, k)) ob[k] = fn(jso[k])
  return ob
}

