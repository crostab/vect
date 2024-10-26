export function duozipper(ma, mb) {
  let { fn, t, b, l, r } = this
  t = t ?? 0 , b = b ?? ma?.length , l = l ?? 0 , r = r ?? ( b && ma[0]?.length )
  const mx = Array(b)
  for (let i = t; i < b; i++) {
    for (let j = l, rowA = ma[i], rowB = mb[i], row = mx[i] = Array(r); j < r; j++)
      row[j] = fn(rowA[j], rowB[j], i, j)
  }
  return mx
}

export function trizipper(ma, mb, mc) {
  let { fn, t, b, l, r } = this
  t = t ?? 0 , b = b ?? ma?.length , l = l ?? 0 , r = r ?? ( b && ma[0]?.length )
  const mx = Array(b)
  for (let i = t; i < b; i++) {
    for (let j = l, rowA = ma[i], rowB = mb[i], rowC = mc[i], row = mx[i] = Array(r); j < r; j++)
      row[j] = fn(rowA[j], rowB[j], rowC[j], i, j)
  }
  return mx
}

export function quazipper(ma, mb, mc, md) {
  let { fn, t, b, l, r } = this
  t = t ?? 0 , b = b ?? ma?.length , l = l ?? 0 , r = r ?? ( b && ma[0]?.length )
  const mx = Array(b)
  for (let i = t; i < b; i++) {
    for (let j = l, rowA = ma[i], rowB = mb[i], rowC = mc[i], rowD = md[i], row = mx[i] = Array(r); j < r; j++)
      row[j] = fn(rowA[j], rowB[j], rowC[j], rowD[j], i, j)
  }
  return mx
}

export const Duozipper = (fn) => duozipper.bind({ fn })
export const Trizipper = (fn) => trizipper.bind({ fn })
export const Quazipper = (fn) => quazipper.bind({ fn })
