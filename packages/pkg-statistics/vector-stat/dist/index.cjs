'use strict';

class Stat {
  static sum(iter) {
    let sum = 0;
    for (let v of iter) sum += v;
    return sum;
  }
  static average(iter) {
    let sum = 0,
      n = 0;
    for (let v of iter) {
      sum += v, n++;
    }
    return sum / n;
  }
  static max(iter) {
    let max = Number.NEGATIVE_INFINITY;
    for (let v of iter) if (v > max) max = v;
    return max;
  }
  static min(iter) {
    let min = Number.POSITIVE_INFINITY;
    for (let v of iter) if (v < min) min = v;
    return min;
  }
  static first(iter) {
    for (let v of iter) return v;
  }
  static last(iter) {
    let last = null;
    for (let v of iter) last = v;
    return last;
  }
  static length(iter) {
    let max = 0;
    for (let v of iter) {
      var _v;
      if ((v = (_v = v) === null || _v === void 0 ? void 0 : _v.length) > max) max = v;
    }
    return max;
  }
}

const stat = function (vec, l) {
  l = l ?? (vec === null || vec === void 0 ? void 0 : vec.length);
  const {
    init,
    acc,
    to
  } = this;
  let i = 0,
    x = init ? init() : vec[i++];
  for (; i < l; i++) x = acc(x, vec[i], i);
  return to ? to(x, l) : x;
};

// /**
//  *
//  * @param {Object|Function} config
//  * @param {*|Function|function(*[],number?):*} [config.init] - create a container to hold statByInitVal
//  * @param {Function|function(*,number?):*} [config.acc] - method to add current value to container when iterating
//  * @param {Function|function(*,number?):*} [config.to] - method to to statByInitVal value from the container
//  * @returns {Function|function(*[],number?):*}
//  */
// export const Stat = (config = {}) => typeof config === FUN
//   ? stat.bind({ acc: config })
//   : stat.bind(config)

exports.Stat = Stat;
exports.stat = stat;
