export function distinctOf(vec) {
  const dedupe = []
  for (let i = 0, h = vec?.length, x; i < h; i++)
    if (!dedupe.includes(x = vec[i])) dedupe.push(x)
  return dedupe
}

export function distinctBy(vec, by) {
  const dedupe = []
  for (let i = 0, h = vec?.length, x; i < h; i++)
    if (by(x = vec[i], i) && !dedupe.includes(x)) dedupe.push(x)
  return dedupe
}

export function distinctTo(vec, to) {
  if (!to) return distinctOf(vec)
  const dedupe = []
  for (let i = 0, h = vec?.length, y; i < h; i++)
    if (!dedupe.includes(y = to(vec[i], i))) dedupe.push(y)
  return dedupe
}

export function distinct(vec, by, to) {
  if (!to) return (!by ? distinctOf(vec) : distinctBy(vec, by))
  const dedupe = []
  for (let i = 0, h = vec?.length, x, y; i < h; i++)
    if (by(x = vec[i], i) && !dedupe.includes(y = to(x, i))) dedupe.push(y)
  return dedupe
}