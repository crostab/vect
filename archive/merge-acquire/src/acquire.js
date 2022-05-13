// export default Function.prototype.apply.bind(Array.prototype.push)

/**
 * @deprecated use vector-merge instead
 */
export const acquire = (va, vb) => (Array.prototype.push.apply(va, vb), va)
