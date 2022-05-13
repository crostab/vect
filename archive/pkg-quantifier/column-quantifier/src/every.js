import { columnEvery } from './ColumnEvery'

/**
 * Return true if every element in a specified column of a matrix matches the input criteria.
 * Return true if either height or width is zero, or specified column index >= width.
 * @param {*[][]} mx
 * @param {number} y
 * @param {function(*,number?,number?):*} crit
 * @param {number} [h]
 * @param {number} [w]
 * @returns {boolean}
 */
export const every = (mx, y, crit, h, w) => columnEvery.call({ y }, mx, crit, h, w)


