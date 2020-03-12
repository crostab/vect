import { insertDown } from '../utils/insertion'

/**
 * Divide input array by an array of indexes,
 * Return selected array and rest array.
 * 'Pick' array is new array, and the 'rest' points to the input array.
 * @param {*[]} vec
 * @param {number[]} indexes
 * @returns {{pick: *[], rest: *[]}} - rest points to original array, pick is an new array.
 */
export const divide = (vec, indexes) => ({
  pick: partition(vec, indexes).splice(indexes[0], indexes.length),
  rest: vec
})

export const partition = (vec, indexes) => {
  let i = 0, dep = indexes.length, cu = indexes[0], nx
  const insertion = insertDown.bind(vec)
  while (++i < dep)
    if ((nx = indexes[i]) !== ++cu) insertion(nx, cu)
  return vec
}
