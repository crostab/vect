'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorZipper = require('@vect/vector-zipper');
var vectorMapper = require('@vect/vector-mapper');
var vectorInit = require('@vect/vector-init');
var vectorUpdate = require('@vect/vector-update');
var vectorSelect = require('@vect/vector-select');
var vectorAlgebra = require('@vect/vector-algebra');
var vectorIndex = require('@vect/vector-index');
var vectorMargin = require('@vect/vector-margin');
var vectorIndicator = require('@vect/vector-indicator');



Object.defineProperty(exports, 'Duozipper', {
  enumerable: true,
  get: function () { return vectorZipper.Duozipper; }
});
Object.defineProperty(exports, 'Quazipper', {
  enumerable: true,
  get: function () { return vectorZipper.Quazipper; }
});
Object.defineProperty(exports, 'Trizipper', {
  enumerable: true,
  get: function () { return vectorZipper.Trizipper; }
});
Object.defineProperty(exports, 'duozipper', {
  enumerable: true,
  get: function () { return vectorZipper.duozipper; }
});
Object.defineProperty(exports, 'iterzip', {
  enumerable: true,
  get: function () { return vectorZipper.iterzip; }
});
Object.defineProperty(exports, 'mutazip', {
  enumerable: true,
  get: function () { return vectorZipper.mutazip; }
});
Object.defineProperty(exports, 'quazipper', {
  enumerable: true,
  get: function () { return vectorZipper.quazipper; }
});
Object.defineProperty(exports, 'trizipper', {
  enumerable: true,
  get: function () { return vectorZipper.trizipper; }
});
Object.defineProperty(exports, 'zipper', {
  enumerable: true,
  get: function () { return vectorZipper.zipper; }
});
Object.defineProperty(exports, 'indexed', {
  enumerable: true,
  get: function () { return vectorMapper.indexed; }
});
Object.defineProperty(exports, 'indexedBy', {
  enumerable: true,
  get: function () { return vectorMapper.indexedBy; }
});
Object.defineProperty(exports, 'indexedOf', {
  enumerable: true,
  get: function () { return vectorMapper.indexedOf; }
});
Object.defineProperty(exports, 'indexedTo', {
  enumerable: true,
  get: function () { return vectorMapper.indexedTo; }
});
Object.defineProperty(exports, 'iterate', {
  enumerable: true,
  get: function () { return vectorMapper.iterate; }
});
Object.defineProperty(exports, 'mapper', {
  enumerable: true,
  get: function () { return vectorMapper.mapper; }
});
Object.defineProperty(exports, 'mutate', {
  enumerable: true,
  get: function () { return vectorMapper.mutate; }
});
Object.defineProperty(exports, 'reviter', {
  enumerable: true,
  get: function () { return vectorMapper.reviter; }
});
Object.defineProperty(exports, 'Range', {
  enumerable: true,
  get: function () { return vectorInit.Range; }
});
Object.defineProperty(exports, 'collect', {
  enumerable: true,
  get: function () { return vectorInit.collect; }
});
Object.defineProperty(exports, 'draft', {
  enumerable: true,
  get: function () { return vectorInit.draft; }
});
Object.defineProperty(exports, 'gather', {
  enumerable: true,
  get: function () { return vectorInit.gather; }
});
Object.defineProperty(exports, 'indexes', {
  enumerable: true,
  get: function () { return vectorInit.indexes; }
});
Object.defineProperty(exports, 'init', {
  enumerable: true,
  get: function () { return vectorInit.init; }
});
Object.defineProperty(exports, 'iso', {
  enumerable: true,
  get: function () { return vectorInit.iso; }
});
Object.defineProperty(exports, 'range', {
  enumerable: true,
  get: function () { return vectorInit.range; }
});
Object.defineProperty(exports, 'seq', {
  enumerable: true,
  get: function () { return vectorInit.seq; }
});
Object.defineProperty(exports, 'tap', {
  enumerable: true,
  get: function () { return vectorInit.tap; }
});
Object.defineProperty(exports, 'keep', {
  enumerable: true,
  get: function () { return vectorUpdate.keep; }
});
Object.defineProperty(exports, 'splices', {
  enumerable: true,
  get: function () { return vectorUpdate.splices; }
});
Object.defineProperty(exports, 'divide', {
  enumerable: true,
  get: function () { return vectorSelect.divide; }
});
Object.defineProperty(exports, 'leap', {
  enumerable: true,
  get: function () { return vectorSelect.leap; }
});
Object.defineProperty(exports, 'select', {
  enumerable: true,
  get: function () { return vectorSelect.select; }
});
Object.defineProperty(exports, 'selectEntry', {
  enumerable: true,
  get: function () { return vectorSelect.selectEntry; }
});
Object.defineProperty(exports, 'selectTriplet', {
  enumerable: true,
  get: function () { return vectorSelect.selectTriplet; }
});
Object.defineProperty(exports, 'separate', {
  enumerable: true,
  get: function () { return vectorSelect.separate; }
});
Object.defineProperty(exports, 'shuffle', {
  enumerable: true,
  get: function () { return vectorSelect.shuffle; }
});
Object.defineProperty(exports, 'acquire', {
  enumerable: true,
  get: function () { return vectorAlgebra.acquire; }
});
Object.defineProperty(exports, 'difference', {
  enumerable: true,
  get: function () { return vectorAlgebra.difference; }
});
Object.defineProperty(exports, 'intersect', {
  enumerable: true,
  get: function () { return vectorAlgebra.intersect; }
});
Object.defineProperty(exports, 'merge', {
  enumerable: true,
  get: function () { return vectorAlgebra.merge; }
});
Object.defineProperty(exports, 'merges', {
  enumerable: true,
  get: function () { return vectorAlgebra.merges; }
});
Object.defineProperty(exports, 'union', {
  enumerable: true,
  get: function () { return vectorAlgebra.union; }
});
Object.defineProperty(exports, 'Swap', {
  enumerable: true,
  get: function () { return vectorIndex.Swap; }
});
Object.defineProperty(exports, 'first', {
  enumerable: true,
  get: function () { return vectorIndex.first; }
});
Object.defineProperty(exports, 'insertDown', {
  enumerable: true,
  get: function () { return vectorIndex.insertDown; }
});
Object.defineProperty(exports, 'insertUp', {
  enumerable: true,
  get: function () { return vectorIndex.insertUp; }
});
Object.defineProperty(exports, 'last', {
  enumerable: true,
  get: function () { return vectorIndex.last; }
});
Object.defineProperty(exports, 'len', {
  enumerable: true,
  get: function () { return vectorIndex.len; }
});
Object.defineProperty(exports, 'swap', {
  enumerable: true,
  get: function () { return vectorIndex.swap; }
});
Object.defineProperty(exports, 'marginCopy', {
  enumerable: true,
  get: function () { return vectorMargin.marginCopy; }
});
Object.defineProperty(exports, 'marginMapper', {
  enumerable: true,
  get: function () { return vectorMargin.marginMapper; }
});
Object.defineProperty(exports, 'marginMutate', {
  enumerable: true,
  get: function () { return vectorMargin.marginMutate; }
});
Object.defineProperty(exports, 'Indicator', {
  enumerable: true,
  get: function () { return vectorIndicator.Indicator; }
});
Object.defineProperty(exports, 'Max', {
  enumerable: true,
  get: function () { return vectorIndicator.Max; }
});
Object.defineProperty(exports, 'Min', {
  enumerable: true,
  get: function () { return vectorIndicator.Min; }
});
Object.defineProperty(exports, 'Piler', {
  enumerable: true,
  get: function () { return vectorIndicator.Piler; }
});
Object.defineProperty(exports, 'maxBy', {
  enumerable: true,
  get: function () { return vectorIndicator.maxBy; }
});
Object.defineProperty(exports, 'minBy', {
  enumerable: true,
  get: function () { return vectorIndicator.minBy; }
});
