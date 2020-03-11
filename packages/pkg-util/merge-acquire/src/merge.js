// export default Function.prototype.call.bind(Array.prototype.concat)

export const merge = (va, vb) => Array.prototype.concat.call(va, vb)
