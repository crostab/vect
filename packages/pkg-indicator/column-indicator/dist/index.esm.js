import { max as max$1, min as min$1 } from '@aryth/comparer'

const max = function (matrix) {
  const {
    y,
    fn
  } = this;
  return matrix.reduce((p, r, i) => max$1(p, fn(r[y], i, y)), fn(matrix[0][y], 0, y));
};
const maxBy = (matrix, y, fn) => max.call({
  y,
  fn
}, matrix);
const Max = (y, fn) => max.bind({
  y,
  fn
});

const min = function (matrix) {
  const {
    y,
    fn
  } = this;
  return matrix.reduce((p, r, i) => min$1(p, fn(r[y], i, y)), fn(matrix[0][y], 0, y));
};
const minBy = (matrix, y, fn) => min.call({
  y,
  fn
}, matrix);
const Min = (y, fn) => min.bind({
  y,
  fn
});

export { Max, Min, maxBy, minBy };
