'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function duozipper(ea, eb) {
  let {
    key,
    value,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const entries = Array(hi || (hi = ea && ea.length));

  for (let i = --hi, ra, rb; i >= lo; i--) {
    ra = ea[i], rb = eb[i];
    entries[i] = [key(ra[0], rb[0], i), value(ra[1], rb[1], i)];
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
  lo = lo || 0;
  const entries = Array(hi || (hi = ea && ea.length));

  for (let i = --hi, ra, rb, rc; i >= lo; i--) {
    ra = ea[i], rb = eb[i], rc = ec[i];
    entries[i] = [key(ra[0], rb[0], rc[0], i), value(ra[1], rb[1], rc[1], i)];
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
  lo = lo || 0;
  const entries = Array(hi || (hi = ea && ea.length));

  for (let i = --hi, ra, rb, rc, rd; i >= lo; i--) {
    ra = ea[i], rb = eb[i], rc = ec[i], rd = ed[i];
    entries[i] = [key(ra[0], rb[0], rc[0], rd[0], i), value(ra[1], rb[1], rc[1], rd[1], i)];
  }

  return entries;
}
const Duozipper = (key, value, {
  lo,
  hi
} = {}) => duozipper.bind({
  key,
  value,
  lo,
  hi
});
const Trizipper = (key, value, {
  lo,
  hi
} = {}) => trizipper.bind({
  key,
  value,
  lo,
  hi
});
const Quazipper = (key, value, {
  lo,
  hi
} = {}) => quazipper.bind({
  key,
  value,
  lo,
  hi
});

const zipper = (ea, eb, keyFn, valFn, l) => duozipper.call({
  key: keyFn,
  value: valFn,
  hi: l
}, ea, eb);

const mutazip = (ea, eb, keyFn, valFn, l) => {
  l = l || ea && ea.length;
  l--;

  for (let ra, rb; l >= 0 && (ra = ea[l]) && (rb = eb[l]); l--) {
    ra[0] = keyFn(ra[0], rb[0], l);
    ra[1] = valFn(ra[1], rb[1], l);
  }

  return ea;
};

exports.Duozipper = Duozipper;
exports.Quazipper = Quazipper;
exports.Trizipper = Trizipper;
exports.mutazip = mutazip;
exports.zipper = zipper;
