import { max as max$1, min as min$1 } from '@aryth/comparer';

const max = function (vec) {
  const fn = this;
  return vec.reduce((p, x, i) => max$1(p, fn(x, i)), fn(vec[0], 0));
};
const maxBy = (vec, indicator) => max.call(indicator, vec);
const Max = indicator => max.bind(indicator);

const min = function (vec) {
  const fn = this;
  return vec.reduce((p, x, i) => min$1(p, fn(x, i)), fn(vec[0], 0));
};
const minBy = (vec, indicator) => min.call(indicator, vec);
const Min = kpi => min.bind(kpi);

export { Max, Min, maxBy, minBy };
