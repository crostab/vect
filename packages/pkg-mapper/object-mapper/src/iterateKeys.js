export const iterateKeys = function (o, fn) {
  for (let k in o)
    if (Object.hasOwnProperty.call(o, k)) fn.call(this, k)
}
