import { zipper } from '@vect/vector-zipper'

/**
 * push each element of column to each row of matrix, return void 0
 * @param {*[][]} matrix
 * @param {*[]} column
 * @returns {*}
 */
export const push = (matrix, column) =>
  void zipper(matrix, column, (row, el) => row.push(el))
