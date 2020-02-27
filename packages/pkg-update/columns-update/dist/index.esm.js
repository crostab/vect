import { mapper } from '@vect/vector-mapper';
import { zipper } from '@vect/vector-zipper';
import { splices as splices$1 } from '@vect/vector-update';

const pop = matrix => mapper(matrix, row => row.pop());

/**
 * push each element of column to each row of matrix, return void 0
 * @param {*[][]} matrix
 * @param {*[]} column
 * @returns {*}
 */

const push = (matrix, column) => void zipper(matrix, column, (row, el) => row.push(el));

const shift = matrix => {
  return mapper(matrix, row => {
    return row.shift();
  });
};

/**
 * unshift each element of column to each row of matrix, return void 0
 * @param {*[][]} matrix
 * @param {*[]} column
 * @returns {*}
 */

const unshift = (matrix, column) => zipper(matrix, column, (row, el) => row.unshift(el));

const splices = (mx, ys) => {
  const hi = ys.length;
  if (hi === 0) return mx;
  if (hi === 1) return mapper(mx, r => (r.splice(ys[0], 1), r));
  return mx.map(row => splices$1(row, ys, hi));
};

export { pop, push, shift, splices, unshift };
