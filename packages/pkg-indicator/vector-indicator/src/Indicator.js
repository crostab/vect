import { FUN } from '@typen/enums'

export const indicatorByInitVal = function (vec, l) {
  l = l || vec.length
  const { init, pile, pick } = this
  let lo = 0, body = init ?? (lo++, vec[0])
  for (let i = lo, fn = pile.bind(body); i < l; i++)
    fn(vec[i], i)
  return pick ? pick(body, l) : body
}

export const indicatorByInitFun = function (vec, l) {
  l = l || vec.length
  const { init, pile, pick } = this
  let body = init(vec, l)
  for (let i = 0, fn = pile.bind(body); i < l; i++)
    fn(vec[i], i)
  return pick ? pick(body, l) : body
}

/**
 *
 * @param {*|Function|function(*[],number?):*} init - create a container to hold pileByInitVal
 * @param {Function|function(*,number?):*} pile - method to add current value to container when iterating
 * @param {Function|function(*,number?):*} pick - method to pick pileByInitVal value from the container
 * @returns {Function|function(*[],number?):*}
 * @constructor
 */
export const Indicator = ({ init, pile, pick }) =>
  typeof init === FUN
    ? indicatorByInitFun.bind({ init, pile, pick })
    : indicatorByInitVal.bind({ init, pile, pick })
