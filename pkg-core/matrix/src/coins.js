/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */
export const coins = mx =>
  !Array.isArray(mx) || !Array.isArray(mx[0])
    ? []
    : mx[0].map((_, i) => i)
