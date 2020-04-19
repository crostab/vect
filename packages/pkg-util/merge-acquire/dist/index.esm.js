// export default Function.prototype.apply.bind(Array.prototype.push)

/**
 * @deprecated use vector-merge instead
 */
const acquire = (va, vb) => (Array.prototype.push.apply(va, vb), va);

// export default Function.prototype.call.bind(Array.prototype.concat)

/**
 * @deprecated use vector-merge instead
 */
const merge = (va, vb) => Array.prototype.concat.call(va, vb);

/**
 * @deprecated use vector-merge instead
 */
const merges = (...vectors) => Array.prototype.concat.apply([], vectors);

export { acquire, merge, merges };
