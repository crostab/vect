import { mapper }                             from '@vect/columns-mapper'
import { maxBy as maxBy$1, minBy as minBy$1 } from '@vect/vector-indicator'

const max = function (matrix) {
  const indicator = this;
  return mapper(matrix, col => maxBy$1(col, indicator));
};
const maxBy = (matrix, indicator) => max.call(indicator, matrix);
const Max = indicator => max.bind(indicator);

const min = function (matrix) {
  const indicator = this;
  return mapper(matrix, col => minBy$1(col, indicator));
};
const minBy = (matrix, indicator) => min.call(indicator, matrix);
const Min = indicator => min.bind(indicator);

export { Max, Min, maxBy, minBy };
