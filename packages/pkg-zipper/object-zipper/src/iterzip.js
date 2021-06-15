export const iterzip = (oa, ob, action) => {
  for (let k in oa)
    action(oa[k], ob[k])
  return void 0
}
