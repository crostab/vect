import { zipper as zipper$1 } from '@vect/vector-zipper';
import { size } from '@vect/matrix-size';

/**
 * Iterate through elements on each (x of rows,y of columns) coordinate of a 2d-array.
 * @param {*[][]} ma
 * @param {*[][]} mb
 * @param {function} fn
 * @returns {*[]}
 */

function zipper(ma, mb, fn) {
  const [ht, wd] = size(ma);
  return zipper$1(ma, mb, (ra, rb, i) => zipper$1(ra, rb, (x, y, j) => fn(x, y, i, j), wd), ht);
}

function mutazip(ma, mb, fn) {
  const [ht, wd] = size(ma);

  for (let i = 0, j, ra, rb; i < ht; i++) for (j = 0, ra = ma[i], rb = mb[i]; j < wd; j++) ra[j] = fn(ra[j], rb[j], i, j);

  return ma;
}

export { mutazip, zipper };
