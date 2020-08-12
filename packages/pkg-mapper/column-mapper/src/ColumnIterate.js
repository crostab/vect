export function columnIterate (mx, fn, l) {
  l = l || mx?.length
  for (let i = 0, { y, data } = this; i < l; i++)
    fn.call(data, mx[i][y], i)
}

/**
 * Return a mapper function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @param {*} thisArg
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */
export const ColumnIterate = (y, thisArg) =>
  columnIterate.bind(thisArg ? { y } : { y, data: thisArg })




