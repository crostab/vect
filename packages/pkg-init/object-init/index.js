import { FUN } from '@typen/enum-data-types'


/**
 * Shallow.
 * @param {...[*,*]} entries - An array of key-value pair, [key, value]
 * @returns {Object|Object<string,*>}
 */
export const ob = (...entries) => {
  let o = {}
  for (let [ k, v ] of entries) o[k] = v
  return o
}

/**
 * @param {string[]} keys
 * @param {*} value
 * @return {Object<string,*>}
 */
export const iso = (keys, value) => {
  let o = {}
  for (let k of keys) o[k] = value
  return o
}

export const wind = (keys, values) => {
  const o = {}, { length } = keys
  for (let i = 0; i < length; i++) o[keys[i]] = values[i]
  return o
}

export const pair = (key, value) => {
  const o = {}
  o[key] = value
  return o
}

/**
 * @param {Array} vec
 * @param {function} [fn]
 * @returns {Object}
 */
export const init = (vec, fn) => {
  return typeof fn === FUN
    ? vectorToObject(vec, fn)
    : entriesToObject(vec)
}

/**
 *
 * @param {[*,*][]} entries
 * @returns {{}}
 */
export const entriesToObject = (entries) => {
  let o = {}
  for (let [ k, v ] of entries) o[k] = v
  return o
}

export const vectorToObject = (vec, fn) => {
  let o = {}
  for (let k of vec) o[k] = fn(k)
  return o
}

export const initByValues = (entries, fn) => {
  let o = {}
  for (let [ k, v ] of entries) o[k] = fn(v)
  return o
}

export {
  vectorToObject as mapToObject,
  vectorToObject as initFromKeys
}