import { mapper } from '@vect/vector-mapper'
import { zipper } from '@vect/vector-zipper'

const EntryFactory = {
  voidEntry() {
    return [undefined, undefined];
  }

};
const draft = size => Array(size).fill(null).map(EntryFactory.voidEntry);
const wind = (keys, values) => zipper(keys, values, (k, v) => [k, v]);
/**
 * Shallow.
 * @param {string[]} keys
 * @param {*} value
 * @return {[string,*][]}
 */

const iso = (keys, value) => mapper(keys, key => [key, value]);

export { draft, iso, wind };
