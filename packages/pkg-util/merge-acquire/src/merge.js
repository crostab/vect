// export default Function.prototype.call.bind(Array.prototype.concat)

/**
 * @deprecated use vector-merge instead
 */
export const merge = (va, vb) => Array.prototype.concat.call(va, vb)
