export const values = function (o) {
  const { keys } = this
  const l = keys?.length, ve = Array(l)
  for (let i = 0; i < l; i++)
    ve[i] = o[keys[i]]
  return ve
}

export const selectValues = (o, keys) => values.call({ keys }, o)

export const SelectValues = keys => values.bind({ keys })
