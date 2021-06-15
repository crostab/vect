export const iterateKeys = function (o, fn) {
  for (let k in o) fn.call(this, k)
}
