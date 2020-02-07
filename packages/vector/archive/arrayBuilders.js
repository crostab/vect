export function range (min, max, fn) {
  const len = max - min + 1, arr = new Array(len)
  if (fn && typeof fn === 'function') {
    for (let i = 0; i < len; i++) arr[i] = fn(min + i)
  } else {
    for (let i = 0; i < len; i++) arr[i] = min + i
  }
  return arr
}

/**
 *
 * @param {number} size
 * @param {*} initial
 * @param {function} progress
 * @returns {*[]}
 */
export function progression (size, initial, progress) {
  switch (size) {
    case 0:
      return []
    case 1:
      return [initial]
    default:
      const arr = new Array(size)
      arr[0] = initial
      for (let i = 1; i < size; i++) {
        arr[i] = progress(arr[i - 1])
      }
      return arr
  }
}

/**
 * Create an arithmetic progression
 * @param {number} size
 * @param {number|string} initial
 * @param {number} delta
 * @returns {*[]}
 */
export function arithmetic (size, initial, delta) {
  return progression(size, initial, previous => previous + delta)
}

/**
 * Create a geometric progression
 * @param {number} size
 * @param {number} initial
 * @param {number} ratio
 * @returns {*[]}}
 */
export function geometric (size, initial, ratio) {
  return progression(size, initial, previous => previous * ratio)
}

/**
 *
 * @param {*[]} ar1
 * @param {*[]} ar2
 * @param {function} product
 * @returns {*[]}
 */
export function decartes (ar1, ar2, product) {
  const l1 = ar1.length, l2 = ar2.length
  let arr = Array(l1 * l2)
  for (let i = 0, j, k = 0; i < l1; i++) {
    for (j = 0; j < l2; j++) {
      arr[k++] = product(ar1[i], ar2[j])
    }
  }
  return arr
  // for (let x of ar1) {
  //   arr.push(...ar2.map(y => product(x, y)))
  // }
}

export function randSample (arr) {
  // const len = arr.length
  // switch (len) {
  //   case 0:
  //     return undefined
  //   case 1:
  //     return arr[0]
  //   default:
  //     const idx = Roulett.rand(0, len)
  //     return arr[idx]
  // }
  return arr[~~(Math.random() * arr.length)]
}
