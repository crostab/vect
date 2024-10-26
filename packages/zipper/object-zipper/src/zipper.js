export const zipper = (oa, ob, fn) => {
  const zip = {}
  for (let k in oa) zip[k] = fn(oa[k], ob[k])
  return zip
}

