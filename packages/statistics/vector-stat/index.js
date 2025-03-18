export { Stat } from './src/Stat.js'

export const stat = function (vec, l) {
  l = l ?? vec?.length
  const { init, acc, to } = this
  let i = 0, x = init ? init() : vec[i++]
  for (; i < l; i++) x = acc(x, vec[i], i)
  return to ? to(x, l) : x
}

// /**
//  *
//  * @param {Object|Function} config
//  * @param {*|Function|function(*[],number?):*} [config.init] - create a container to hold statByInitVal
//  * @param {Function|function(*,number?):*} [config.acc] - method to add current value to container when iterating
//  * @param {Function|function(*,number?):*} [config.to] - method to to statByInitVal value from the container
//  * @returns {Function|function(*[],number?):*}
//  */
// export const Stat = (config = {}) => typeof config === FUN
//   ? stat.bind({ acc: config })
//   : stat.bind(config)