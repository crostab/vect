import { nullish } from '@typen/nullish'

export const replenish = (object, another) => {
  for (let k in another)
    if (nullish(object[k]))
      object[k] = another[k]
  return object
}