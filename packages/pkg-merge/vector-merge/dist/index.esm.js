// export default Function.prototype.apply.bind(Array.prototype.push)
const acquire = (va, vb) => (Array.prototype.push.apply(va, vb), va);

// export default Function.prototype.call.bind(Array.prototype.concat)
const merge = (va, vb) => Array.prototype.concat.call(va, vb);

const merges = (...vectors) => Array.prototype.concat.apply([], vectors);

export { acquire, merge, merges };
