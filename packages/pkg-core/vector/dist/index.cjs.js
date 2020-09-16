'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Mapper = require('@vect/vector-mapper');
var Indicate = require('@vect/vector-indicator');
var Init = require('@vect/vector-init');
var Margin = require('@vect/vector-margin');
var Merge = require('@vect/vector-merge');
var Select = require('@vect/vector-select');
var Update = require('@vect/vector-update');
var Zipper = require('@vect/vector-zipper');

function _interopNamespace(e) {
  if (e && e.__esModule) { return e; } else {
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () {
              return e[k];
            }
          });
        }
      });
    }
    n['default'] = e;
    return Object.freeze(n);
  }
}

var Mapper__namespace = /*#__PURE__*/_interopNamespace(Mapper);
var Indicate__namespace = /*#__PURE__*/_interopNamespace(Indicate);
var Init__namespace = /*#__PURE__*/_interopNamespace(Init);
var Margin__namespace = /*#__PURE__*/_interopNamespace(Margin);
var Merge__namespace = /*#__PURE__*/_interopNamespace(Merge);
var Select__namespace = /*#__PURE__*/_interopNamespace(Select);
var Update__namespace = /*#__PURE__*/_interopNamespace(Update);
var Zipper__namespace = /*#__PURE__*/_interopNamespace(Zipper);

const union = (a, b) => {
  const ve = a.slice();
  Mapper.iterate(b, x => {
    if (!a.includes(x)) ve.push(x);
  });
  return ve;
};

const intersect = (a, b) => {
  const ve = [];
  Mapper.iterate(a, x => {
    if (b.includes(x)) ve.push(x);
  });
  return ve;
};

const difference = (a, b) => {
  const ve = [];
  Mapper.iterate(a, x => {
    if (!b.includes(x)) ve.push(x);
  });
  return ve;
};

var Algebra = /*#__PURE__*/Object.freeze({
  __proto__: null,
  difference: difference,
  intersect: intersect,
  union: union
});

const {
  iterate,
  reviter,
  mapper,
  mutate
} = Mapper__namespace;
const {
  marginCopy,
  marginMapper,
  marginMutate
} = Margin__namespace;
const {
  zipper,
  mutazip,
  Duozipper,
  Trizipper,
  Quazipper
} = Zipper__namespace;
const {
  maxBy,
  minBy,
  Max,
  Min,
  Piler,
  Indicator
} = Indicate__namespace;
const {
  draft,
  iso,
  init,
  seq,
  range
} = Init__namespace;
const {
  splices,
  partition
} = Update__namespace;
const {
  divide,
  leap,
  select,
  selectEntry,
  shuffle
} = Select__namespace;
const {
  acquire,
  merge,
  merges
} = Merge__namespace;
const {
  union: union$1,
  intersect: intersect$1,
  difference: difference$1
} = Algebra;

exports.Duozipper = Duozipper;
exports.Indicator = Indicator;
exports.Max = Max;
exports.Min = Min;
exports.Piler = Piler;
exports.Quazipper = Quazipper;
exports.Trizipper = Trizipper;
exports.acquire = acquire;
exports.difference = difference$1;
exports.divide = divide;
exports.draft = draft;
exports.init = init;
exports.intersect = intersect$1;
exports.iso = iso;
exports.iterate = iterate;
exports.leap = leap;
exports.mapper = mapper;
exports.marginCopy = marginCopy;
exports.marginMapper = marginMapper;
exports.marginMutate = marginMutate;
exports.maxBy = maxBy;
exports.merge = merge;
exports.merges = merges;
exports.minBy = minBy;
exports.mutate = mutate;
exports.mutazip = mutazip;
exports.partition = partition;
exports.range = range;
exports.reviter = reviter;
exports.select = select;
exports.selectEntry = selectEntry;
exports.seq = seq;
exports.shuffle = shuffle;
exports.splices = splices;
exports.union = union$1;
exports.zipper = zipper;
