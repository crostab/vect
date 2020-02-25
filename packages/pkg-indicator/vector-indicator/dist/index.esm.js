import { max as max$1, min as min$1 } from '@aryth/comparer';

const max = function (vec) {
  const fn = this;
  return !fn ? vec.reduce((p, x) => max$1(x, p), vec[0]) : vec.reduce((p, x, i) => max$1(fn(x, i), p), fn(vec[0], 0));
};
const maxBy = (vec, indicator) => max.call(indicator, vec);
const Max = indicator => max.bind(indicator);

const min = function (vec) {
  const fn = this;
  return !fn ? vec.reduce((p, x) => min$1(x, p), vec[0]) : vec.reduce((p, x, i) => min$1(fn(x, i), p), fn(vec[0], 0));
};
const minBy = (vec, indicator) => min.call(indicator, vec);
const Min = kpi => min.bind(kpi);

export { Max, Min, maxBy, minBy };
