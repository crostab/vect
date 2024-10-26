import { insertDown } from '@vect/vector-index'

export const partition = (vec, indexes, hi) => {
  hi = hi || indexes.length
  let i = 0, cu = indexes[0], nx
  const insertion = insertDown.bind(vec)
  while (++i < hi)
    if ((nx = indexes[i]) !== ++cu) insertion(nx, cu)
  return vec
}
