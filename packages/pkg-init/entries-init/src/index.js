import { zipper } from '@vect/vector-zipper'
import { mapper } from '@vect/vector-mapper'

export const draft = (size) => Array(size).fill([, ,])

export const wind = (keys, values) => zipper(keys, values, (k, v) => [k, v])

/**
 * Shallow.
 * @param {string[]} keys
 * @param {*} value
 * @return {Object<string,*>}
 */
export const iso = (keys, value) => mapper(keys, key => [key, value])
