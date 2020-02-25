'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var matrixInit = require('@vect/matrix-init');

function duozipper(ma, mb) {
  let {
    y,
    fn,
    mx,
    t,
    b
  } = this;
  t = t || 0, b = b || ma && ma.length, mx = mx || matrixInit.draft(b, y);

  for (let i = t; i < b; i++) mx[i][y] = fn(ma[i][y], mb[i][y], i);

  return mx;
}
function trizipper(ma, mb, mc) {
  let {
    y,
    fn,
    mx,
    t,
    b
  } = this;
  t = t || 0, b = b || ma && ma.length, mx = mx || matrixInit.draft(b, y);

  for (let i = t; i < b; i++) mx[i][y] = fn(ma[i][y], mb[i][y], mc[i][y], i);

  return mx;
}
function quazipper(ma, mb, mc, md) {
  let {
    y,
    fn,
    mx,
    t,
    b
  } = this;
  t = t || 0, b = b || ma && ma.length, mx = mx || matrixInit.draft(b, y);

  for (let i = t; i < b; i++) mx[i][y] = fn(ma[i][y], mb[i][y], mc[i][y], md[i][y], i);

  return mx;
}
const Duozipper = (y, fn, {
  mx,
  t,
  b
} = {}) => duozipper.bind({
  y,
  fn,
  mx,
  t,
  b
});
const Trizipper = (y, fn, {
  mx,
  t,
  b
} = {}) => trizipper.bind({
  y,
  fn,
  mx,
  t,
  b
});
const Quazipper = (y, fn, {
  mx,
  t,
  b
} = {}) => quazipper.bind({
  y,
  fn,
  mx,
  t,
  b
});

const zipper = (ma, mb, y, fn, l) => duozipper.call({
  y,
  fn,
  b: l
}, ma, mb);

const mutazip = (ma, mb, y, fn, l) => duozipper.call({
  y,
  fn,
  mx: ma,
  b: l
}, ma, mb);

const ColumnZipper = y => (ma, mb, fn, l) => duozipper.call({
  y,
  fn,
  b: l
}, ma, mb);

const ColumnMutazip = y => (ma, mb, fn, l) => duozipper.call({
  y,
  fn,
  mx: ma,
  b: l
}, ma, mb);

exports.ColumnMutazip = ColumnMutazip;
exports.ColumnZipper = ColumnZipper;
exports.Duozipper = Duozipper;
exports.Quazipper = Quazipper;
exports.Trizipper = Trizipper;
exports.mutazip = mutazip;
exports.zipper = zipper;
