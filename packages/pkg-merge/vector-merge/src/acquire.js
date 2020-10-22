// export default Function.prototype.apply.bind(Array.prototype.push)
export const acquire = (va, vb) => (Array.prototype.push.apply(va, vb), va)
