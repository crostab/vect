import { size } from '@vect/matrix-size';

/**
 * Return true if every element in a specified column of a matrix matches the input criteria.
 * Return true if either height or width is zero, or specified column index >= width.
 * @param {*[][]} mx
 * @param {function(*,number?,number?):*} crit
 * @returns {boolean}
 */

function columnEvery(mx, crit) {
  const {
    y
  } = this;
  const [ht, wd] = size(mx);
  if (!wd || y >= wd) return true;

  for (let i = 0; i < ht; i++) if (!crit(mx[i][y], i)) return false;

  return true;
}
const ColumnEvery = y => columnEvery.bind({
  y
});

/**
 * Return true if every element in a specified column of a matrix matches the input criteria.
 * Return true if either height or width is zero, or specified column index >= width.
 * @param {*[][]} mx
 * @param {number} y
 * @param {function(*,number?,number?):*} crit
 * @returns {boolean}
 */

const every = (mx, y, crit) => columnEvery.call({
  y
}, mx, crit);

/**
 * Return true if at least one element in a specified column of a matrix matches the input criteria.
 * Return false if either height or width is zero, or specified column index >= width.
 * @param {*[][]} mx
 * @param {number} y
 * @param {function(*,number?,number?):*} crit
 * @returns {boolean}
 */
const some = (mx, y, crit) => columnSome.call({
  y
}, mx, crit);

/**
 * Return true if some element in a specified column of a matrix matches the input criteria.
 * Return false if either height or width is zero, or specified column index >= width.
 * @param {*[][]} mx
 * @param {function(*,number?,number?):*} crit
 * @returns {boolean}
 */

function columnSome$1(mx, crit) {
  const {
    y
  } = this;
  const [ht, wd] = size(mx);
  if (!wd || y >= wd) return false;

  for (let i = 0; i < ht; i++) if (crit(mx[i][y], i)) return true;

  return false;
}
const ColumnSome = y => columnSome$1.bind({
  y
});

export { ColumnEvery, ColumnSome, every, some };
