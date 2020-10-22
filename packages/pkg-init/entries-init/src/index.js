import { mapper } from '@vect/vector-mapper'
import { zipper } from '@vect/vector-zipper'

export const EntryFactory = {
  voidEntry() { return [undefined, undefined] }
}

export const draft = (size) => Array(size).fill(null).map(EntryFactory.voidEntry)

export const wind = (keys, values) => zipper(keys, values, (k, v) => [k, v])

/**
 * Shallow.
 * @param {string[]} keys
 * @param {*} value
 * @return {[string,*][]}
 */
export const iso = (keys, value) => mapper(keys, key => [key, value])