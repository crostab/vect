// acquire is useful when you want to return the original expanded array, and when the array length is short.
// merge is useful when you want to return a new array, or when the array length is longer.
// the watershed between short and long array is estimated to be 32.

// export default Function.prototype.apply.bind(Array.prototype.push)
export const acquire = (va, vb) => (Array.prototype.push.apply(va, vb), va)

// export default Function.prototype.call.bind(Array.prototype.concat)
export const merge = (va, vb) => Array.prototype.concat.call(va, vb)

export const merges = (...vectors) => Array.prototype.concat.apply([], vectors)