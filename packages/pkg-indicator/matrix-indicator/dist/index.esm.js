import { max as max$1, min as min$1 } from '@aryth/comparer'

const max = function (matrix) {
  let indicator = this;
  return matrix.reduce((prevVal, currRow, i) => max$1(prevVal, currRow.reduce((a, b, j) => max$1(a, indicator(b, i, j)))), indicator(matrix[0][0], 0, 0));
};
const maxBy = (matrix, indicator) => max.call(indicator, matrix);
const Max = indicator => max.bind(indicator);

const min = function (matrix) {
  let fn = this;
  return matrix.reduce((prv, r, i) => min$1(prv, r.reduce((acc, x, j) => min$1(acc, fn(x, i, j)))), fn(matrix[0][0], 0, 0));
};
const minBy = (matrix, indicator) => min.call(indicator, matrix);
const Min = indicator => min.bind(indicator);

export { Max, Min, maxBy, minBy };
