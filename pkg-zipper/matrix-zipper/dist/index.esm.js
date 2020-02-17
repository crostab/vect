import { size } from '@vect/matrix-size';

function duozipper(ma, mb) {
  let {
    fn,
    t,
    b,
    l,
    r
  } = this;
  const [ht, wd] = size(ma);
  t = t || 0, b = b || ht, l = l || 0, r = r || wd;
  const mx = Array(b);

  for (let i = t, j, ro, ra, rb; i < b; i++) {
    ra = ma[i], rb = mb[i];

    for (j = l, mx[i] = ro = Array(r); j < r; j++) ro[j] = fn(ra[j], rb[j], i, j);
  }

  return mx;
}
function trizipper(ma, mb, mc) {
  let {
    fn,
    t,
    b,
    l,
    r
  } = this;
  const [ht, wd] = size(ma);
  t = t || 0, b = b || ht, l = l || 0, r = r || wd;
  const mx = Array(b);

  for (let i = t, j, ro, ra, rb, rc; i < b; i++) {
    ra = ma[i], rb = mb[i], rc = mc[i];

    for (j = l, mx[i] = ro = Array(r); j < r; j++) ro[j] = fn(ra[j], rb[j], rc[j], i, j);
  }

  return mx;
}
function quazipper(ma, mb, mc, md) {
  let {
    fn,
    t,
    b,
    l,
    r
  } = this;
  const [ht, wd] = size(ma);
  t = t || 0, b = b || ht, l = l || 0, r = r || wd;
  const mx = Array(b);

  for (let i = t, j, ro, ra, rb, rc, rd; i < b; i++) {
    ra = ma[i], rb = mb[i], rc = mc[i], rd = md[i];

    for (j = l, mx[i] = ro = Array(r); j < r; j++) ro[j] = fn(ra[j], rb[j], rc[j], rd[j], i, j);
  }

  return mx;
}
const Duozipper = (fn, {
  t,
  b,
  l,
  r
} = {}) => duozipper.bind({
  fn,
  t,
  b,
  l,
  r
});
const Trizipper = (fn, {
  t,
  b,
  l,
  r
} = {}) => trizipper.bind({
  fn,
  t,
  b,
  l,
  r
});
const Quazipper = (fn, {
  t,
  b,
  l,
  r
} = {}) => quazipper.bind({
  fn,
  t,
  b,
  l,
  r
});

/**
 * Zip 2 matrices by each elements from both.
 * @param {*[][]} ma
 * @param {*[][]} mb
 * @param {function} fn
 * @returns {*[]}
 */

const zipper = (ma, mb, fn) => duozipper.call({
  fn
}, ma, mb);

const mutazip = (ma, mb, fn) => {
  const [ht, wd] = size(ma);

  for (let i = 0, j, ra, rb; i < ht; i++) for (j = 0, ra = ma[i], rb = mb[i]; j < wd; j++) ra[j] = fn(ra[j], rb[j], i, j);

  return ma;
};

export { Duozipper, Quazipper, Trizipper, mutazip, zipper };
