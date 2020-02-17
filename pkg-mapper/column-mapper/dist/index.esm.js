const mapper = (mx, y, fn, l) => columnMapper.call({
  y
}, mx, fn, l);

function columnMutate(mx, fn, l) {
  const {
    y
  } = this;
  l = l || mx && mx.length;

  for (let r; --l >= 0 && (r = mx[l]);) r[y] = fn(r[y], l);

  return mx;
}
/**
 * Return a mutate function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */

const ColumnMutate = y => columnMutate.bind({
  y
});

const mutate = (mx, y, fn, l) => columnMutate.call({
  y
}, mx, fn, l);

function columnMapper$1(mx, fn, l) {
  const {
    y
  } = this;
  l = l || mx && mx.length;
  const mt = Array(l);

  for (let r; --l >= 0 && (r = mx[l].slice());) {
    r[y] = fn(r[y], l);
    mt[l] = r;
  }

  return mt;
}
/**
 * Return a mapper function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */

const ColumnMapper = y => columnMapper$1.bind({
  y
});

export { ColumnMapper, ColumnMutate, mapper, mutate };
