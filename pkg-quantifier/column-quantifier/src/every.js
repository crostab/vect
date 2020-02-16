import { size } from '@vect/matrix-size'
import { columnEvery } from './ColumnEvery'

/**
 * Return true if every element in a specified column of a matrix matches the input criteria.
 * Return true if either height or width is zero, or specified column index >= width.
 * @param {*[][]} mx
 * @param {number} y
 * @param {function(*,number?,number?):*} crit
 * @returns {boolean}
 */
export const every = (mx, y, crit) => columnEvery.call({ y }, mx, crit)


