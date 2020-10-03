import { FUN }                from '@typen/enum-data-types'
import { size }               from '@vect/matrix-size'
import { init as initVector } from '@vect/vector-init'

export const stat = function (mx) {
  const [h, w] = size(mx)
  const { init, acc, to } = this
  let i = 0, vec = init ? initVector(w, init) : mx[i++].slice()
  for (; i < h; i++)
    for (let row = mx[i], j = 0; j < w; j++)
      vec[j] = acc(vec[j], row[j], i, j)
  return to ? to(vec, h, w) : vec
}

/**
 *
 * @param {Object|Function} config
 * @param {*|Function|function(*[],number?):*} [config.init] - create a container to hold statByInitVal
 * @param {Function|function(*,number?):*} [config.acc] - method to add current value to container when iterating
 * @param {Function|function(*,number?):*} [config.to] - method to to statByInitVal value from the container
 * @returns {Function|function(*[],number?):*}
 */
export const Stat = (config = {}) => typeof config === FUN
  ? stat.bind({ acc: config })
  : stat.bind(config)



