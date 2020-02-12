import { size } from '@vect/matrix-size'

export function mutate (mx, fn) {
  const [ht, wd] = size(mx)
  for (let i = 0, j, r; i < ht; i++)
    for (j = 0, r = mx[i]; j < wd; j++)
      r[j] = fn(r[j], i, j)
  return mx
}
