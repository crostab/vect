function duozipper(ma, mb) {
  var _ma$;
  let {
    fn,
    t,
    b,
    l,
    r
  } = this;
  t = t ?? 0, b = b ?? (ma === null || ma === void 0 ? void 0 : ma.length), l = l ?? 0, r = r ?? (b && ((_ma$ = ma[0]) === null || _ma$ === void 0 ? void 0 : _ma$.length));
  const mx = Array(b);
  for (let i = t; i < b; i++) {
    for (let j = l, rowA = ma[i], rowB = mb[i], row = mx[i] = Array(r); j < r; j++) row[j] = fn(rowA[j], rowB[j], i, j);
  }
  return mx;
}
function trizipper(ma, mb, mc) {
  var _ma$2;
  let {
    fn,
    t,
    b,
    l,
    r
  } = this;
  t = t ?? 0, b = b ?? (ma === null || ma === void 0 ? void 0 : ma.length), l = l ?? 0, r = r ?? (b && ((_ma$2 = ma[0]) === null || _ma$2 === void 0 ? void 0 : _ma$2.length));
  const mx = Array(b);
  for (let i = t; i < b; i++) {
    for (let j = l, rowA = ma[i], rowB = mb[i], rowC = mc[i], row = mx[i] = Array(r); j < r; j++) row[j] = fn(rowA[j], rowB[j], rowC[j], i, j);
  }
  return mx;
}
function quazipper(ma, mb, mc, md) {
  var _ma$3;
  let {
    fn,
    t,
    b,
    l,
    r
  } = this;
  t = t ?? 0, b = b ?? (ma === null || ma === void 0 ? void 0 : ma.length), l = l ?? 0, r = r ?? (b && ((_ma$3 = ma[0]) === null || _ma$3 === void 0 ? void 0 : _ma$3.length));
  const mx = Array(b);
  for (let i = t; i < b; i++) {
    for (let j = l, rowA = ma[i], rowB = mb[i], rowC = mc[i], rowD = md[i], row = mx[i] = Array(r); j < r; j++) row[j] = fn(rowA[j], rowB[j], rowC[j], rowD[j], i, j);
  }
  return mx;
}
const Duozipper = fn => duozipper.bind({
  fn
});
const Trizipper = fn => trizipper.bind({
  fn
});
const Quazipper = fn => quazipper.bind({
  fn
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

const mutazip = (ma, mb, fn, w, h) => {
  var _ma$;
  h = h ?? (ma === null || ma === void 0 ? void 0 : ma.length), w = w ?? (h && ((_ma$ = ma[0]) === null || _ma$ === void 0 ? void 0 : _ma$.length));
  for (let i = 0; i < h; i++) for (let j = 0, ra = ma[i], rb = mb[i]; j < w; j++) ra[j] = fn(ra[j], rb[j], i, j);
  return ma;
};

const iterzip = (ma, mb, fn, w, h) => {
  var _ma$;
  h = h ?? (ma === null || ma === void 0 ? void 0 : ma.length), w = w ?? (h && ((_ma$ = ma[0]) === null || _ma$ === void 0 ? void 0 : _ma$.length));
  for (let i = 0; i < h; i++) for (let j = 0, ra = ma[i], rb = mb[i]; j < w; j++) fn(ra[j], rb[j], i, j);
  return void 0;
};

export { Duozipper, Quazipper, Trizipper, duozipper, iterzip, mutazip, quazipper, trizipper, zipper };
