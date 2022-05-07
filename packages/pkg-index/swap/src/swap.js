export const swap = function (i, j) {
  const temp = this[i]
  this[i] = this[j]
  return this[j] = temp
}

export const Swap = vec => swap.bind(vec)
