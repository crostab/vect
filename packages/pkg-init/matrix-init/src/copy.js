/**
 *
 * @param {*[][]} mx
 * @param {number} h
 */
export const shallow = (mx, h) => mapper(mx, row => row.slice(), h)
