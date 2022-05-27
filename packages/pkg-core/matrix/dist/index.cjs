'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var matrixZipper = require('@vect/matrix-zipper');
var matrixMapper = require('@vect/matrix-mapper');
var columnsMapper = require('@vect/columns-mapper');
var matrixInit = require('@vect/matrix-init');
var matrixQuantifier = require('@vect/matrix-quantifier');
var matrixAlgebra = require('@vect/matrix-algebra');
var columnGetter = require('@vect/column-getter');
var columnsSelect = require('@vect/columns-select');
var columnsUpdate = require('@vect/columns-update');
var matrixIndex = require('@vect/matrix-index');

const POINTWISE = 0;
const ROWWISE = 1;
const COLUMNWISE = 2; // export { marginCopy, marginMapper, marginMutate }       from '@vect/matrix-margin'
// export { maxBy, minBy, Max, Min }                       from '@vect/matrix-indicator'

Object.defineProperty(exports, 'Duozipper', {
  enumerable: true,
  get: function () { return matrixZipper.Duozipper; }
});
Object.defineProperty(exports, 'Quazipper', {
  enumerable: true,
  get: function () { return matrixZipper.Quazipper; }
});
Object.defineProperty(exports, 'Trizipper', {
  enumerable: true,
  get: function () { return matrixZipper.Trizipper; }
});
Object.defineProperty(exports, 'duozipper', {
  enumerable: true,
  get: function () { return matrixZipper.duozipper; }
});
Object.defineProperty(exports, 'iterzip', {
  enumerable: true,
  get: function () { return matrixZipper.iterzip; }
});
Object.defineProperty(exports, 'mutazip', {
  enumerable: true,
  get: function () { return matrixZipper.mutazip; }
});
Object.defineProperty(exports, 'quazipper', {
  enumerable: true,
  get: function () { return matrixZipper.quazipper; }
});
Object.defineProperty(exports, 'trizipper', {
  enumerable: true,
  get: function () { return matrixZipper.trizipper; }
});
Object.defineProperty(exports, 'zipper', {
  enumerable: true,
  get: function () { return matrixZipper.zipper; }
});
Object.defineProperty(exports, 'entries', {
  enumerable: true,
  get: function () { return matrixMapper.entries; }
});
Object.defineProperty(exports, 'entriesBy', {
  enumerable: true,
  get: function () { return matrixMapper.entriesBy; }
});
Object.defineProperty(exports, 'entriesOf', {
  enumerable: true,
  get: function () { return matrixMapper.entriesOf; }
});
Object.defineProperty(exports, 'entriesTo', {
  enumerable: true,
  get: function () { return matrixMapper.entriesTo; }
});
Object.defineProperty(exports, 'entryIndexed', {
  enumerable: true,
  get: function () { return matrixMapper.entryIndexed; }
});
Object.defineProperty(exports, 'entryIndexedBy', {
  enumerable: true,
  get: function () { return matrixMapper.entryIndexedBy; }
});
Object.defineProperty(exports, 'entryIndexedOf', {
  enumerable: true,
  get: function () { return matrixMapper.entryIndexedOf; }
});
Object.defineProperty(exports, 'entryIndexedTo', {
  enumerable: true,
  get: function () { return matrixMapper.entryIndexedTo; }
});
Object.defineProperty(exports, 'indexed', {
  enumerable: true,
  get: function () { return matrixMapper.indexed; }
});
Object.defineProperty(exports, 'indexedBy', {
  enumerable: true,
  get: function () { return matrixMapper.indexedBy; }
});
Object.defineProperty(exports, 'indexedOf', {
  enumerable: true,
  get: function () { return matrixMapper.indexedOf; }
});
Object.defineProperty(exports, 'indexedTo', {
  enumerable: true,
  get: function () { return matrixMapper.indexedTo; }
});
Object.defineProperty(exports, 'iterate', {
  enumerable: true,
  get: function () { return matrixMapper.iterate; }
});
Object.defineProperty(exports, 'mapper', {
  enumerable: true,
  get: function () { return matrixMapper.mapper; }
});
Object.defineProperty(exports, 'mutate', {
  enumerable: true,
  get: function () { return matrixMapper.mutate; }
});
Object.defineProperty(exports, 'points', {
  enumerable: true,
  get: function () { return matrixMapper.points; }
});
Object.defineProperty(exports, 'pointsBy', {
  enumerable: true,
  get: function () { return matrixMapper.pointsBy; }
});
Object.defineProperty(exports, 'pointsOf', {
  enumerable: true,
  get: function () { return matrixMapper.pointsOf; }
});
Object.defineProperty(exports, 'pointsTo', {
  enumerable: true,
  get: function () { return matrixMapper.pointsTo; }
});
Object.defineProperty(exports, 'rows', {
  enumerable: true,
  get: function () { return matrixMapper.rows; }
});
Object.defineProperty(exports, 'rowsBy', {
  enumerable: true,
  get: function () { return matrixMapper.rowsBy; }
});
Object.defineProperty(exports, 'rowsOf', {
  enumerable: true,
  get: function () { return matrixMapper.rowsOf; }
});
Object.defineProperty(exports, 'rowsTo', {
  enumerable: true,
  get: function () { return matrixMapper.rowsTo; }
});
Object.defineProperty(exports, 'selectMutate', {
  enumerable: true,
  get: function () { return matrixMapper.selectMutate; }
});
Object.defineProperty(exports, 'tripletIndexed', {
  enumerable: true,
  get: function () { return matrixMapper.tripletIndexed; }
});
Object.defineProperty(exports, 'tripletIndexedBy', {
  enumerable: true,
  get: function () { return matrixMapper.tripletIndexedBy; }
});
Object.defineProperty(exports, 'tripletIndexedOf', {
  enumerable: true,
  get: function () { return matrixMapper.tripletIndexedOf; }
});
Object.defineProperty(exports, 'tripletIndexedTo', {
  enumerable: true,
  get: function () { return matrixMapper.tripletIndexedTo; }
});
Object.defineProperty(exports, 'triplets', {
  enumerable: true,
  get: function () { return matrixMapper.triplets; }
});
Object.defineProperty(exports, 'tripletsBy', {
  enumerable: true,
  get: function () { return matrixMapper.tripletsBy; }
});
Object.defineProperty(exports, 'tripletsOf', {
  enumerable: true,
  get: function () { return matrixMapper.tripletsOf; }
});
Object.defineProperty(exports, 'tripletsTo', {
  enumerable: true,
  get: function () { return matrixMapper.tripletsTo; }
});
Object.defineProperty(exports, 'columns', {
  enumerable: true,
  get: function () { return columnsMapper.columns; }
});
Object.defineProperty(exports, 'columnsBy', {
  enumerable: true,
  get: function () { return columnsMapper.columnsBy; }
});
Object.defineProperty(exports, 'columnsIterate', {
  enumerable: true,
  get: function () { return columnsMapper.columnsIterate; }
});
Object.defineProperty(exports, 'columnsMapper', {
  enumerable: true,
  get: function () { return columnsMapper.columnsMapper; }
});
Object.defineProperty(exports, 'columnsOf', {
  enumerable: true,
  get: function () { return columnsMapper.columnsOf; }
});
Object.defineProperty(exports, 'columnsTo', {
  enumerable: true,
  get: function () { return columnsMapper.columnsTo; }
});
Object.defineProperty(exports, 'draft', {
  enumerable: true,
  get: function () { return matrixInit.draft; }
});
Object.defineProperty(exports, 'init', {
  enumerable: true,
  get: function () { return matrixInit.init; }
});
Object.defineProperty(exports, 'iso', {
  enumerable: true,
  get: function () { return matrixInit.iso; }
});
Object.defineProperty(exports, 'product', {
  enumerable: true,
  get: function () { return matrixInit.product; }
});
Object.defineProperty(exports, 'shallow', {
  enumerable: true,
  get: function () { return matrixInit.shallow; }
});
Object.defineProperty(exports, 'every', {
  enumerable: true,
  get: function () { return matrixQuantifier.every; }
});
Object.defineProperty(exports, 'some', {
  enumerable: true,
  get: function () { return matrixQuantifier.some; }
});
Object.defineProperty(exports, 'transpose', {
  enumerable: true,
  get: function () { return matrixAlgebra.transpose; }
});
Object.defineProperty(exports, 'Columns', {
  enumerable: true,
  get: function () { return columnGetter.Columns; }
});
Object.defineProperty(exports, 'divide', {
  enumerable: true,
  get: function () { return columnsSelect.divide; }
});
Object.defineProperty(exports, 'select', {
  enumerable: true,
  get: function () { return columnsSelect.select; }
});
Object.defineProperty(exports, 'selectEntries', {
  enumerable: true,
  get: function () { return columnsSelect.selectEntries; }
});
Object.defineProperty(exports, 'selectObject', {
  enumerable: true,
  get: function () { return columnsSelect.selectObject; }
});
Object.defineProperty(exports, 'separate', {
  enumerable: true,
  get: function () { return columnsSelect.separate; }
});
Object.defineProperty(exports, 'pop', {
  enumerable: true,
  get: function () { return columnsUpdate.pop; }
});
Object.defineProperty(exports, 'push', {
  enumerable: true,
  get: function () { return columnsUpdate.push; }
});
Object.defineProperty(exports, 'shift', {
  enumerable: true,
  get: function () { return columnsUpdate.shift; }
});
Object.defineProperty(exports, 'splices', {
  enumerable: true,
  get: function () { return columnsUpdate.splices; }
});
Object.defineProperty(exports, 'unshift', {
  enumerable: true,
  get: function () { return columnsUpdate.unshift; }
});
Object.defineProperty(exports, 'coins', {
  enumerable: true,
  get: function () { return matrixIndex.coins; }
});
Object.defineProperty(exports, 'column', {
  enumerable: true,
  get: function () { return matrixIndex.column; }
});
Object.defineProperty(exports, 'height', {
  enumerable: true,
  get: function () { return matrixIndex.height; }
});
Object.defineProperty(exports, 'isMatrix', {
  enumerable: true,
  get: function () { return matrixIndex.isMatrix; }
});
Object.defineProperty(exports, 'size', {
  enumerable: true,
  get: function () { return matrixIndex.size; }
});
Object.defineProperty(exports, 'width', {
  enumerable: true,
  get: function () { return matrixIndex.width; }
});
exports.COLUMNWISE = COLUMNWISE;
exports.POINTWISE = POINTWISE;
exports.ROWWISE = ROWWISE;
