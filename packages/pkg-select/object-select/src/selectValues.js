export const selectValues = function (o, keys) {
  const l = keys.length, ve = Array(l)
  for (let i = 0; i < l; i++)
    ve[i] = o[keys[i]]
  return ve
}
