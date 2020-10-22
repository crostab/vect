export const mutate = (o, fn) => {
  for (let k in o)
    if (Object.hasOwnProperty.call(o, k)) o[k] = fn(o[k])
  return o
}
