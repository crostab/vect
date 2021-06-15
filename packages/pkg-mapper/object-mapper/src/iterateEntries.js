export const iterateEntries = function (o, fn, l) {
  const ents = Object.entries(o)
  l = l ?? ents.length
  for (let i = 0; i < l; i++) fn.call(this, ents[i], i)
}
