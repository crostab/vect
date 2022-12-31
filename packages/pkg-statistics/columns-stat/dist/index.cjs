'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumDataTypes = require('@typen/enum-data-types');
var matrixIndex = require('@vect/matrix-index');
var vectorInit = require('@vect/vector-init');

const stat = function (mx) {
  const [h, w] = matrixIndex.size(mx);
  const {
    init,
    acc,
    to
  } = this;
  let i = 0,
    vec = init ? vectorInit.init(w, init) : mx[i++].slice();
  for (; i < h; i++) for (let row = mx[i], j = 0; j < w; j++) vec[j] = acc(vec[j], row[j], i, j);
  return to ? to(vec, h, w) : vec;
};

/**
 *
 * @param {Object|Function} config
 * @param {*|Function|function(*[],number?):*} [config.init] - create a container to hold statByInitVal
 * @param {Function|function(*,number?):*} [config.acc] - method to add current value to container when iterating
 * @param {Function|function(*,number?):*} [config.to] - method to to statByInitVal value from the container
 * @returns {Function|function(*[],number?):*}
 */
const Stat = (config = {}) => typeof config === enumDataTypes.FUN ? stat.bind({
  acc: config
}) : stat.bind(config);

exports.Stat = Stat;
exports.stat = stat;
