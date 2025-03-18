export function collectOf(vec) {
  const output = []
  for (let i = 0, h = vec?.length, x; i < h; i++)
    output.push(vec[i])
  return output
}

export function collectBy(vec, by) {
  const output = []
  for (let i = 0, h = vec?.length, x; i < h; i++)
    if (by(x = vec[i], i)) output.push(x)
  return output
}

export function collectTo(vec, to) {
  if (!to) return collectOf(vec)
  const output = []
  for (let i = 0, h = vec?.length; i < h; i++)
    output.push(to(vec[i], i))
  return output
}

export function collect(vec, by, to) {
  if (!to) return (!by ? collectOf(vec) : collectBy(vec, by))
  const output = []
  for (let i = 0, h = vec?.length, x, y; i < h; i++)
    if (by(x = vec[i], i)) output.push(to(x, i))
  return output
}

