export const mutazip = (oa, ob, fn) => {
  for (let k in oa)
    oa[k] = fn(oa[k], ob[k])
  return oa
}
