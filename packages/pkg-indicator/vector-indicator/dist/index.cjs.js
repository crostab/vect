'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var comparer = require('@aryth/comparer');
var enumDataTypes = require('@typen/enum-data-types');

const max = function (vec) {
  const fn = this;
  return !fn ? vec.reduce((p, x) => comparer.max(x, p), vec[0]) : vec.reduce((p, x, i) => comparer.max(fn(x, i), p), fn(vec[0], 0));
};
const maxBy = (vec, indicator) => max.call(indicator, vec);
const Max = indicator => max.bind(indicator);

const min = function (vec) {
  const fn = this;
  return !fn ? vec.reduce((p, x) => comparer.min(x, p), vec[0]) : vec.reduce((p, x, i) => comparer.min(fn(x, i), p), fn(vec[0], 0));
};
const minBy = (vec, indicator) => min.call(indicator, vec);
const Min = kpi => min.bind(kpi);

const indicatorByInitVal = function (vec, l) {
  var _l;

  l = (_l = l) !== null && _l !== void 0 ? _l : vec === null || vec === void 0 ? void 0 : vec.length;
  const {
    init,
    pile,
    pick
  } = this;
  let lo = 0,
      body = init !== null && init !== void 0 ? init : (lo++, vec[0]);

  for (let i = lo, fn = pile.bind(body); i < l; i++) fn(vec[i], i);

  return pick ? pick(body, l) : body;
};
const indicatorByInitFun = function (vec, l) {
  var _l2;

  l = (_l2 = l) !== null && _l2 !== void 0 ? _l2 : vec === null || vec === void 0 ? void 0 : vec.length;
  const {
    init,
    pile,
    pick
  } = this;
  let body = init(vec, l);

  for (let i = 0, fn = pile.bind(body); i < l; i++) fn(vec[i], i);

  return pick ? pick(body, l) : body;
};
/**
 *
 * @param {*|Function|function(*[],number?):*} init - create a container to hold pileByInitVal
 * @param {Function|function(*,number?):*} pile - method to add current value to container when iterating
 * @param {Function|function(*,number?):*} pick - method to pick pileByInitVal value from the container
 * @returns {Function|function(*[],number?):*}
 * @constructor
 */

const Indicator = ({
  init,
  pile,
  pick
}) => typeof init === enumDataTypes.FUN ? indicatorByInitFun.bind({
  init,
  pile,
  pick
}) : indicatorByInitVal.bind({
  init,
  pile,
  pick
});

const pileByInitVal = function (vec, l) {
  var _l;

  l = (_l = l) !== null && _l !== void 0 ? _l : vec === null || vec === void 0 ? void 0 : vec.length;
  const {
    init,
    pile,
    pick
  } = this;
  let lo = 0,
      p = init !== null && init !== void 0 ? init : (lo++, vec[0]);

  for (let i = lo; i < l; i++) p = pile(p, vec[i], i);

  return pick ? pick(p, l) : p;
};
const pileByInitFun = function (vec, l) {
  var _l2;

  l = (_l2 = l) !== null && _l2 !== void 0 ? _l2 : vec === null || vec === void 0 ? void 0 : vec.length;
  const {
    init,
    pile,
    pick
  } = this;
  let p = init(vec, l);

  for (let i = 0; i < l; i++) p = pile(p, vec[i], i);

  return pick ? pick(p, l) : p;
};
/**
 *
 * @param {Object|Function} config
 * @param {*|Function|function(*[],number?):*} [config.init] - create a container to hold pileByInitVal
 * @param {Function|function(*,number?):*} [config.pile] - method to add current value to container when iterating
 * @param {Function|function(*,number?):*} [config.pick] - method to pick pileByInitVal value from the container
 * @returns {Function|function(*[],number?):*}
 */

const Piler = config => {
  if (typeof config === enumDataTypes.FUN) return pileByInitVal.bind({
    pile: config
  });
  const {
    init,
    pile,
    pick
  } = config;
  return typeof init === enumDataTypes.FUN ? pileByInitFun.bind({
    init,
    pile,
    pick
  }) : pileByInitVal.bind({
    init,
    pile,
    pick
  });
};

exports.Indicator = Indicator;
exports.Max = Max;
exports.Min = Min;
exports.Piler = Piler;
exports.maxBy = maxBy;
exports.minBy = minBy;
