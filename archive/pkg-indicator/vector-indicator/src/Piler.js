import { FUN } from '@typen/enum-data-types'

export const pileByInitVal = function (vec, l) {
  l = l ?? vec?.length
  const { init, pile, pick } = this
  let lo = 0, p = init ?? (lo++, vec[0])
  for (let i = lo; i < l; i++)
    p = pile(p, vec[i], i)
  return pick ? pick(p, l) : p
}


export const pileByInitFun = function (vec, l) {
  l = l ?? vec?.length
  const { init, pile, pick } = this
  let p = init(vec, l)
  for (let i = 0; i < l; i++) p = pile(p, vec[i], i)
  return pick ? pick(p, l) : p
}

/**
 *
 * @param {Object|Function} config
 * @param {*|Function|function(*[],number?):*} [config.init] - create a container to hold pileByInitVal
 * @param {Function|function(*,number?):*} [config.pile] - method to add current value to container when iterating
 * @param {Function|function(*,number?):*} [config.pick] - method to pick pileByInitVal value from the container
 * @returns {Function|function(*[],number?):*}
 */
export const Piler = (config) => {
  if (typeof config === FUN) return pileByInitVal.bind({ pile: config })
  const { init, pile, pick } = config
  return typeof init === FUN
    ? pileByInitFun.bind({ init, pile, pick })
    : pileByInitVal.bind({ init, pile, pick })
}



