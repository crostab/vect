function duozipper(a, b) {
  let {
    fn,
    hi,
    lo
  } = this;
  const zip = Array(hi = hi ?? (a === null || a === void 0 ? void 0 : a.length));

  for (let i = lo ?? 0; i < hi; i++) zip[i] = fn(a[i], b[i], i);

  return zip;
}
function trizipper(a, b, c) {
  let {
    fn,
    hi,
    lo
  } = this;
  const zip = Array(hi = hi ?? (a === null || a === void 0 ? void 0 : a.length));

  for (let i = lo ?? 0; i < hi; i++) zip[i] = fn(a[i], b[i], c[i], i);

  return zip;
}
function quazipper(a, b, c, d) {
  let {
    fn,
    hi,
    lo
  } = this;
  const zip = Array(hi = hi ?? (a === null || a === void 0 ? void 0 : a.length));

  for (let i = lo ?? 0; i < hi; i++) zip[i] = fn(a[i], b[i], c[i], d[i], i);

  return zip;
}
const Duozipper = (fn, lo, hi) => duozipper.bind({
  fn,
  hi,
  lo
});
const Trizipper = (fn, lo, hi) => trizipper.bind({
  fn,
  hi,
  lo
});
const Quazipper = (fn, lo, hi) => quazipper.bind({
  fn,
  hi,
  lo
});

/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} fn
 * @param {number} [hi]
 * @returns {*[]}
 */

const zipper = (a, b, fn, hi) => duozipper.call({
  fn,
  hi
}, a, b);

const mutazip = (va, vb, fn, hi) => {
  hi = hi ?? (va === null || va === void 0 ? void 0 : va.length);

  for (let i = 0; i < hi; i++) va[i] = fn(va[i], vb[i], i);

  return va;
};

const iterzip = (va, vb, action, hi) => {
  hi = hi ?? (va === null || va === void 0 ? void 0 : va.length);

  for (let i = 0; i < hi; i++) action(va[i], vb[i], i);

  return void 0;
};

export { Duozipper, Quazipper, Trizipper, duozipper, iterzip, mutazip, quazipper, trizipper, zipper };
