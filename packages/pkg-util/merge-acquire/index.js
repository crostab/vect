// acquire is useful when you want to return the original expanded array, and when the array length is short.
// merge is useful when you want to return a new array, or when the array length is longer.
// the watershed between short and long array is estimated to be 32.

export { acquire } from './src/acquire'
export { merge } from './src/merge'
export { merges } from './src/merges'

