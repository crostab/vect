function duozipper(ea, eb) {
  let {
    key,
    value,
    lo,
    hi
  } = this;
  value = value || key, lo = lo || 0, hi = hi || (ea === null || ea === void 0 ? void 0 : ea.length);
  const entries = Array(hi);

  for (let i = --hi, a, b; i >= lo; i--) {
    a = ea[i], b = eb[i];
    entries[i] = [key(a[0], b[0], i), value(a[1], b[1], i)];
  }

  return entries;
}
function trizipper(ea, eb, ec) {
  let {
    key,
    value,
    lo,
    hi
  } = this;
  value = value || key, lo = lo || 0, hi = hi || (ea === null || ea === void 0 ? void 0 : ea.length);
  const entries = Array(hi);

  for (let i = --hi, a, b, c; i >= lo; i--) {
    a = ea[i], b = eb[i], c = ec[i];
    entries[i] = [key(a[0], b[0], c[0], i), value(a[1], b[1], c[1], i)];
  }

  return entries;
}
function quazipper(ea, eb, ec, ed) {
  let {
    key,
    value,
    lo,
    hi
  } = this;
  value = value || key, lo = lo || 0, hi = hi || (ea === null || ea === void 0 ? void 0 : ea.length);
  const entries = Array(hi);

  for (let i = --hi, a, b, c, d; i >= lo; i--) {
    a = ea[i], b = eb[i], c = ec[i], d = ed[i];
    entries[i] = [key(a[0], b[0], c[0], d[0], i), value(a[1], b[1], c[1], d[1], i)];
  }

  return entries;
}
/**
 *
 * @param {function(*,*,number):*} key
 * @param {function(*,*,number):*} [value]
 * @param {number} [lo]
 * @param {number} [hi]
 * @returns {function|function([*,*][],[*,*][],number?):[*,*][]}
 */

const Duozipper = (key, value, {
  lo,
  hi
} = {}) => duozipper.bind({
  key,
  value,
  lo,
  hi
});
/**
 *
 * @param {function(*,*,*,number):*} key
 * @param {function(*,*,*,number):*} [value]
 * @param {number} [lo]
 * @param {number} [hi]
 * @returns {function|function([*,*][],[*,*][],[*,*][],number?):[*,*][]}
 */

const Trizipper = (key, value, {
  lo,
  hi
} = {}) => trizipper.bind({
  key,
  value,
  lo,
  hi
});
/**
 *
 * @param {function(*,*,*,*,number):*} key
 * @param {function(*,*,*,*,number):*} [value]
 * @param {number} [lo]
 * @param {number} [hi]
 * @returns {function|function([*,*][],[*,*][],[*,*][],[*,*][],number?):[*,*][]}
 */

const Quazipper = (key, value, {
  lo,
  hi
} = {}) => quazipper.bind({
  key,
  value,
  lo,
  hi
});

/**
 *
 * @param {[*,*][]} ea
 * @param {[*,*][]} eb
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */

const zipper = (ea, eb, keyMap, valMap, l) => duozipper.call({
  key: keyMap,
  value: valMap,
  hi: l
}, ea, eb);

/**
 *
 * @param {[*,*][]} ea
 * @param {[*,*][]} eb
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
const mutazip = (ea, eb, keyMap, valMap, l) => {
  l = l || (ea === null || ea === void 0 ? void 0 : ea.length), valMap = valMap || keyMap;

  for (let a, b, i = 0; i < l && (a = ea[i]) && (b = eb[i]); i++) a[0] = keyMap(a[0], b[0], i), a[1] = valMap(a[1], b[1], i);

  return ea;
};

export { Duozipper, Quazipper, Trizipper, mutazip, zipper };
