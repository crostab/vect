export const mapKeys = (jso, fn) => {
  const ob = {}
  for (let k in jso)
    if (Object.hasOwnProperty.call(jso, k)) ob[fn(k)] = jso[k]
  return ob
}
