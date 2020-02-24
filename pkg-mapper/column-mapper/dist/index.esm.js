const iterate = function (mx, y, fn, l) {
  l = l || mx && mx.length;

  for (let i = 0; i < l; i++) fn.call(this, mx[i][y], i);
};

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

function columnIterate(mx, fn, l) {
  const {
    y,
    data
  } = this;
  l = l || mx && mx.length;

  for (let i = 0; i < l; i++) fn.call(data, mx[i][y], i);
}
/**
 * Return a mapper function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @param {*} thisArg
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */

const ColumnIterate = (y, thisArg) => columnIterate.bind(thisArg ? {
  y
} : {
  y,
  data: thisArg
});

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

export { ColumnIterate, ColumnMapper, ColumnMutate, iterate, mapper, mutate };
