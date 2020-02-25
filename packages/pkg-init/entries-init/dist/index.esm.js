import { zipper } from '@vect/vector-zipper';
import { mapper } from '@vect/vector-mapper';

const draft = size => Array(size).fill([,,]);
const wind = (keys, values) => zipper(keys, values, (k, v) => [k, v]);
/**
 * Shallow.
 * @param {string[]} keys
 * @param {*} value
 * @return {Object<string,*>}
 */

const iso = (keys, value) => mapper(keys, key => [key, value]);

export { draft, iso, wind };
