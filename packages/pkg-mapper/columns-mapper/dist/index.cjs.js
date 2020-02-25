'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var columnGetter = require('@vect/column-getter');

const iterate = function (mx, fnOnColumns, h, w) {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);

  for (let j = 0, cols = columnGetter.Columns(mx); j < w; j++) fnOnColumns.call(this, cols(j, h), j);
};

const mapper = (mx, mapOnColumns, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);
  const tcol = Array(w);

  for (let j = 0, cols = columnGetter.Columns(mx); j < w; j++) tcol[j] = mapOnColumns(cols(j, h), j);

  return tcol;
};

exports.iterate = iterate;
exports.mapper = mapper;
