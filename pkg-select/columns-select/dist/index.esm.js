import { column } from '@vect/column-getter';
import { select as select$1 } from '@vect/vector-select';

/**
 * @param {*[][]} mx
 * @param {number[]} ys
 * @returns {*}
 */

const select = (mx, ys) => {
  const hi = ys.length;
  if (hi === 0) return mx;
  if (hi === 1) return column(mx, ys[0]);
  return mx.map(row => select$1(row, ys, hi));
};

export { select };
