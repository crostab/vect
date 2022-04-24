'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const nullish = x => x === null || x === void 0;

const replenish = (object, another) => {
  for (let k in another) if (nullish(object[k])) object[k] = another[k];

  return object;
};

exports.replenish = replenish;
