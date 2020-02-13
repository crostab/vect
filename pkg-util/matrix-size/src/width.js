import { height } from './height'

export const width = mx => {
  let r
  return height(mx) && (r = mx[0]) ? r.length : r
}
