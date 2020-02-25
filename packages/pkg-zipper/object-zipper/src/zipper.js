export const zipper = (oa, ob, fn) => {
  const ot = {}
  for (let k in oa)
    if (Object.hasOwnProperty.call(oa, k)) ot[k] = fn(oa[k], ob[k])
  return ot
}

