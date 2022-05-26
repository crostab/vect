export const first = (ve) => ve[0]

export const last = (ve) => ve[ve.length - 1]

export const len = (ve) => ve?.length

export function swap(i, j) {
  const el = this[i]
  this[i] = this[j]
  return this[j] = el
}

/**
 * @param {*[]} vec - input array to be mutated
 * @param {number[]} inds - indexes in ascending order, indicating which elements to bunch, e.g. [1,3,5] to [1,2,4]
 * @returns {*[]} mutated input array, with elements at provided indexes bunched
 */
export const rollBunch = (vec, inds) => {
  let lo = inds[0]
  for (let i of inds) {
    if (i > lo) rollLo.call(vec, i, lo)
    lo++
  }
  return vec
}

export function rollTop(vec, inds) {
  for (let lo = 0, hi = inds.length; lo < hi; lo++) {
    const ind = inds[lo]
    if (ind > lo) rollLo.call(vec, ind, lo)
  }
  return vec
}

export function fitRoll(inds) {
  for (let hi = inds.length - 1; hi > 0; hi--) {
    const cu = inds[hi]
    for (let i = 0; i < hi; i++) if (inds[i] > cu) inds[hi]++
  }
  return inds
}

/**
 * Roll vec[i] up to vec[nx] where i <= nx
 * @param i
 * @param hi
 */
export function rollUp(i, hi) {
  const el = this[i]
  while (i < hi) this[i] = this[++i] // roll to upper index by moving next element lower down
  return this[hi] = el
}


/**
 * Roll vec[i]
 * pt <= i
 */
export function rollLo(i, lo) {
  const el = this[i]
  while (lo < i) this[i] = this[--i] // roll to lower index by moving previous element higher up
  return this[lo] = el
}


export const Swap = vec => swap.bind(vec)

export {
  rollUp as insertUp,
  rollLo as insertDown,
}
