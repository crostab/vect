// export function mapEntries(o, fn, l) {
//   const t = {}, ents = Object.entries(o)
//   l = l ?? ents.length
//   let i = 0
//   for (let i = 0, k, v; i < l; i++) {
//     [k, v] = fn.call(this, ents[i], i)
//     t[k] = v
//   }
//   return t
// }