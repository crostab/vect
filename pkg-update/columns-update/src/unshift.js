import { zipper } from '@vect/vector-zipper'

/**
 * unshift each element of column to each row of matrix, return void 0
 * @param {*[][]} matrix
 * @param {*[]} column
 * @returns {*}
 */
export const unshift = (matrix, column) => zipper(matrix, column, (row, el) => row.unshift(el))
