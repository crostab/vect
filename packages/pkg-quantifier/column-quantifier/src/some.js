/**
 * Return true if at least one element in a specified column of a matrix matches the input criteria.
 * Return false if either height or width is zero, or specified column index >= width.
 * @param {*[][]} mx
 * @param {number} y
 * @param {function(*,number?,number?):*} crit
 * @param {number} [h]
 * @param {number} [w]
 * @returns {boolean}
 */
export const some = (mx, y, crit, h, w) => columnSome.call({ y }, mx, crit, h, w)
