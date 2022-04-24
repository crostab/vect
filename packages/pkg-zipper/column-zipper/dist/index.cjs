'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var matrixInit = require('@vect/matrix-init');

function duozipper(ma, mb) {
  let {
    y,
    fn,
    mx,
    lo,
    hi
  } = this;
  hi = hi ?? (ma === null || ma === void 0 ? void 0 : ma.length), mx = mx ?? matrixInit.draft(hi, y);

  for (let i = lo ?? 0; i < hi; i++) mx[i][y] = fn(ma[i][y], mb[i][y], i);

  return mx;
}
function trizipper(ma, mb, mc) {
  let {
    y,
    fn,
    mx,
    lo,
    hi
  } = this;
  hi = hi ?? (ma === null || ma === void 0 ? void 0 : ma.length), mx = mx ?? matrixInit.draft(hi, y);

  for (let i = lo ?? 0; i < hi; i++) mx[i][y] = fn(ma[i][y], mb[i][y], mc[i][y], i);

  return mx;
}
function quazipper(ma, mb, mc, md) {
  let {
    y,
    fn,
    mx,
    lo,
    hi
  } = this;
  hi = hi ?? (ma === null || ma === void 0 ? void 0 : ma.length), mx = mx ?? matrixInit.draft(hi, y);

  for (let i = lo ?? 0; i < hi; i++) mx[i][y] = fn(ma[i][y], mb[i][y], mc[i][y], md[i][y], i);

  return mx;
}
const Duozipper = (y, fn, {
  mx,
  lo,
  hi
} = {}) => duozipper.bind({
  y,
  fn,
  mx,
  lo,
  hi
});
const Trizipper = (y, fn, {
  mx,
  lo,
  hi
} = {}) => trizipper.bind({
  y,
  fn,
  mx,
  lo,
  hi
});
const Quazipper = (y, fn, {
  mx,
  lo,
  hi
} = {}) => quazipper.bind({
  y,
  fn,
  mx,
  lo,
  hi
});

const zipper = (ma, mb, y, fn, hi) => duozipper.call({
  y,
  fn,
  hi
}, ma, mb);

const mutazip = (mx, mb, y, fn, hi) => {
  return duozipper.call({
    y,
    fn,
    mx,
    hi
  }, mx, mb);
};

const ColumnZipper = y => (ma, mb, fn, hi) => duozipper.call({
  y,
  fn,
  hi
}, ma, mb);

const ColumnMutazip = y => (mx, mb, fn, hi) => duozipper.call({
  y,
  fn,
  mx,
  hi
}, mx, mb);

function iterzip(ma, mb, y, action, hi) {
  hi = hi ?? (ma === null || ma === void 0 ? void 0 : ma.length);

  for (let i = 0; i < hi; i++) action(ma[i][y], mb[i][y], i);

  return void 0;
}

exports.ColumnMutazip = ColumnMutazip;
exports.ColumnZipper = ColumnZipper;
exports.Duozipper = Duozipper;
exports.Quazipper = Quazipper;
exports.Trizipper = Trizipper;
exports.duozipper = duozipper;
exports.iterzip = iterzip;
exports.mutazip = mutazip;
exports.quazipper = quazipper;
exports.trizipper = trizipper;
exports.zipper = zipper;
