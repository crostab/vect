function duozipper(a, b) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || a && a.length);

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], hi);

  return vec;
}
function trizipper(a, b, c) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || a && a.length);

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], c[hi], hi);

  return vec;
}
function quazipper(a, b, c, d) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || a && a.length);

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], c[hi], d[hi], hi);

  return vec;
}
const Duozipper = (fn, {
  lo,
  hi
} = {}) => duozipper.bind({
  fn,
  lo,
  hi
});
const Trizipper = (fn, {
  lo,
  hi
} = {}) => trizipper.bind({
  fn,
  lo,
  hi
});
const Quazipper = (fn, {
  lo,
  hi
} = {}) => quazipper.bind({
  fn,
  lo,
  hi
});

/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} fn
 * @param {number} [l]
 * @returns {*[]}
 */

const zipper = (a, b, fn, l) => duozipper.call({
  fn,
  hi: l
}, a, b);

const mutazip = (va, vb, fn, l) => {
  l = l || va && va.length;

  for (--l; l >= 0; l--) va[l] = fn(va[l], vb[l], l);

  return va;
};

export { Duozipper, Quazipper, Trizipper, mutazip, zipper };
