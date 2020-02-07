/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */
export const coins = mx => !mx?.length
  ? []
  : !mx[0]?.length
    ? []
    : mx[0].map((_, i) => i)
