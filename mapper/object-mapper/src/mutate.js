export const mutate = (jso, fn) => {
  for (let k in jso)
    if (Object.hasOwnProperty.call(jso, k)) jso[k] = fn(jso[k])
  return jso
}
