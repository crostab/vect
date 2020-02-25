export const mutazip = (oa, ob, fn) => {
  for (let k in oa)
    if (Object.hasOwnProperty.call(oa, k)) oa[k] = fn(oa[k], ob[k])
  return oa
}
