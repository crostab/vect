'use strict';

var objectIndex = require('@vect/object-index');

const nullish = x => x === null || x === void 0;

const replenish = (object, another) => {
  for (let k in another) if (nullish(object[k])) object[k] = another[k];
  return object;
};

function appendValue(k, v) {
  return objectIndex.getOrVec.call(this, k).push(v);
}
function assignValue(k, i, v) {
  objectIndex.getOr.call(this, k)[i] = v;
}

exports.appendValue = appendValue;
exports.assignValue = assignValue;
exports.replenish = replenish;
