/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */
export const coins = mx => {
  if (!mx?.length) return []
  if (!mx[0]?.length) return []
  return mx[0].map((_, i) => i)
}
