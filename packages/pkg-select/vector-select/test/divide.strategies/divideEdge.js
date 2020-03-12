import { swap } from '@vect/swap'

export function divideEdge (vec, indexes) {
  if (!isContinuous(indexes)) partition(vec, indexes)
  const pick = vec.splice(indexes[0], indexes.length)
  const rest = vec
  return {
    pick,
    rest
  }
}

/**
 *
 * @param vec
 * @param ins
 * @returns {*}
 */
const partition = (vec, ins) => {
  let i = 0, l = ins.length, cu = ins[0], nx
  while (++i < l)
    if ((nx = ins[i]) !== ++cu) swap.call(vec, nx, cu)
  return vec
}

export const isContinuous = ins => {
  let i = 0, l = ins.length, cu = ins[0]
  while (++i < l)
    if (ins[i] !== ++cu) return false
  return true
}




