function duozipper(ea, eb) {
  let {
    key,
    value,
    lo,
    hi
  } = this;
  value = value ?? key, hi = hi ?? (ea === null || ea === void 0 ? void 0 : ea.length);
  const zip = Array(hi);

  for (let i = lo ?? 0, a, b; i < hi; i++) {
    a = ea[i], b = eb[i];
    zip[i] = [key(a[0], b[0], i), value(a[1], b[1], i)];
  }

  return zip;
}
function trizipper(ea, eb, ec) {
  let {
    key,
    value,
    lo,
    hi
  } = this;
  value = value ?? key, hi = hi ?? (ea === null || ea === void 0 ? void 0 : ea.length);
  const zip = Array(hi);

  for (let i = lo ?? 0, a, b, c; i < hi; i++) {
    a = ea[i], b = eb[i], c = ec[i];
    zip[i] = [key(a[0], b[0], c[0], i), value(a[1], b[1], c[1], i)];
  }

  return zip;
}
function quazipper(ea, eb, ec, ed) {
  let {
    key,
    value,
    lo,
    hi
  } = this;
  value = value ?? key, hi = hi ?? (ea === null || ea === void 0 ? void 0 : ea.length);
  const zip = Array(hi);

  for (let i = lo ?? 0, a, b, c, d; i < hi; i++) {
    a = ea[i], b = eb[i], c = ec[i], d = ed[i];
    zip[i] = [key(a[0], b[0], c[0], d[0], i), value(a[1], b[1], c[1], d[1], i)];
  }

  return zip;
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
 * @param {[*,*][]} entA
 * @param {[*,*][]} entB
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [hi]
 * @returns {[*,*][]}
 */

const zipper = (entA, entB, keyMap, valMap, hi) => duozipper.call({
  key: keyMap,
  value: valMap,
  hi
}, entA, entB);

/**
 *
 * @param {[*,*][]} entA
 * @param {[*,*][]} entB
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [hi]
 * @returns {[*,*][]}
 */
const mutazip = (entA, entB, keyMap, valMap, hi) => {
  hi = hi ?? (entA === null || entA === void 0 ? void 0 : entA.length), valMap = valMap ?? keyMap;

  for (let i = 0, a, b; i < hi && (a = entA[i]) && (b = entB[i]); i++) {
    a[0] = keyMap(a[0], b[0], i);
    a[1] = valMap(a[1], b[1], i);
  }

  return entA;
};

/**
 *
 * @param {[*,*][]} entA
 * @param {[*,*][]} entB
 * @param {function} keyAction
 * @param {function} [valueAction]
 * @param {number} [hi]
 * @returns {[*,*][]}
 */
const iterzip = (entA, entB, keyAction, valueAction, hi) => {
  hi = hi ?? (entA === null || entA === void 0 ? void 0 : entA.length), valueAction = valueAction ?? keyAction;

  for (let i = 0, a, b; i < hi && (a = entA[i]) && (b = entB[i]); i++) {
    keyAction(a[0], b[0], i);
    valueAction(a[1], b[1], i);
  }

  return void 0;
};

export { Duozipper, Quazipper, Trizipper, duozipper, iterzip, mutazip, quazipper, trizipper, zipper };
