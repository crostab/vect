'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ColumnGetter = require('@vect/column-getter');
var ColumnsMapper = require('@vect/columns-mapper');
var Indicator = require('@vect/matrix-indicator');
var Init = require('@vect/matrix-init');
var Mapper = require('@vect/matrix-mapper');
var Margin = require('@vect/matrix-margin');
var Quantifier = require('@vect/matrix-quantifier');
var Size = require('@vect/matrix-index');
var Transpose = require('@vect/matrix-transpose');
var Zipper = require('@vect/matrix-zipper');
var columnsSelect = require('@vect/columns-select');
var columnsUpdate = require('@vect/columns-update');
var vectorIndex = require('@vect/vector-index');
var enumMatrixDirections = require('@vect/enum-matrix-directions');
var vectorMapper = require('@vect/vector-mapper');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var ColumnGetter__namespace = /*#__PURE__*/_interopNamespace(ColumnGetter);
var ColumnsMapper__namespace = /*#__PURE__*/_interopNamespace(ColumnsMapper);
var Indicator__namespace = /*#__PURE__*/_interopNamespace(Indicator);
var Init__namespace = /*#__PURE__*/_interopNamespace(Init);
var Mapper__namespace = /*#__PURE__*/_interopNamespace(Mapper);
var Margin__namespace = /*#__PURE__*/_interopNamespace(Margin);
var Quantifier__namespace = /*#__PURE__*/_interopNamespace(Quantifier);
var Size__namespace = /*#__PURE__*/_interopNamespace(Size);
var Transpose__namespace = /*#__PURE__*/_interopNamespace(Transpose);
var Zipper__namespace = /*#__PURE__*/_interopNamespace(Zipper);

const isMatrix = mx => Array.isArray(mx) && Array.isArray(mx[0]);

/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */

const coins = mx => isMatrix(mx) ? vectorIndex.first(mx).map((_, i) => i) : [];

class Matrix extends Array {
  constructor(size) {
    super(size);
  }

  static of(...rows) {
    return new Matrix(rows === null || rows === void 0 ? void 0 : rows.length).collect(rows);
  }

  static from(rows) {
    return new Matrix(rows === null || rows === void 0 ? void 0 : rows.length).collect(rows);
  }

  get height() {
    return this.length;
  }

  get width() {
    var _this$;

    return (_this$ = this[0]) === null || _this$ === void 0 ? void 0 : _this$.length;
  }

  collect(iter, lo = 0) {
    for (let row of iter) this[lo++] = row;

    return this;
  }

  row(x) {
    return this[x];
  }

  column(y) {
    return Size.column.call(this, y);
  }

  *rowOf(x) {
    yield* this[x];
  }

  *columnOf(y) {
    for (let i = 0, h = this.length; i < h; i++) yield this[i][y];
  }

  *rows(by, to) {
    yield* this;
  }

  *columns(by, to) {
    for (let j = 0, w = this.width; j < w; j++) yield this.column(j);
  }

  *rowsTo(to) {
    yield* vectorMapper.indexedTo(this, to);
  }

  *columnsTo(to) {
    for (let j = 0, w = this.width; j < w; j++) yield to(this.column(j), j);
  } // return yield* columnsTo(this, to)


  *pointsTo(to) {
    yield* Mapper.indexedTo(this, to);
  }

  *entriesTo(xy, to) {
    yield* Mapper.entryIndexedTo(this, xy, to);
  }

  *tripletsTo(xyz, to) {
    yield* Mapper.tripletIndexedTo(this, xyz, to);
  }

  *rowsBy(by, to) {
    yield* vectorMapper.indexed(this, by, to);
  }

  *columnsBy(by, to) {
    for (let j = 0, w = this.width, col; j < w; j++) if (by(col = this.columnAt(j), j)) yield to(col, j);
  }

  *pointsBy(by, to) {
    yield* Mapper.indexed(this, by, to);
  }

  *entriesBy(xy, by, to) {
    yield* Mapper.entryIndexed(this, xy, to);
  }

  *tripletsBy(xyz, by, to) {
    yield* Mapper.tripletIndexed(this, xyz, by, to);
  }

}

const {
  draft,
  fab,
  iso,
  init,
  ini,
  starter,
  shallow
} = Init__namespace;
const {
  iterate,
  mutate,
  mapper
} = Mapper__namespace;
const {
  marginCopy,
  marginMapper,
  marginMutate
} = Margin__namespace;
const {
  zipper,
  mutazip,
  iterzip,
  duozipper,
  trizipper,
  quazipper,
  Duozipper,
  Trizipper,
  Quazipper
} = Zipper__namespace;
const {
  maxBy,
  minBy,
  Max,
  Min
} = Indicator__namespace;
const {
  every,
  some
} = Quantifier__namespace;
const {
  size,
  width,
  height
} = Size__namespace;
const {
  transpose
} = Transpose__namespace;
const {
  column,
  Columns
} = ColumnGetter__namespace;
const {
  mapper: columnsMapper
} = ColumnsMapper__namespace;

Object.defineProperty(exports, 'select', {
  enumerable: true,
  get: function () { return columnsSelect.select; }
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
Object.defineProperty(exports, 'COLUMNWISE', {
  enumerable: true,
  get: function () { return enumMatrixDirections.COLUMNWISE; }
});
Object.defineProperty(exports, 'POINTWISE', {
  enumerable: true,
  get: function () { return enumMatrixDirections.POINTWISE; }
});
Object.defineProperty(exports, 'ROWWISE', {
  enumerable: true,
  get: function () { return enumMatrixDirections.ROWWISE; }
});
exports.Columns = Columns;
exports.Duozipper = Duozipper;
exports.Matrix = Matrix;
exports.Max = Max;
exports.Min = Min;
exports.Quazipper = Quazipper;
exports.Trizipper = Trizipper;
exports.coins = coins;
exports.column = column;
exports.columnsMapper = columnsMapper;
exports.draft = draft;
exports.duozipper = duozipper;
exports.every = every;
exports.fab = fab;
exports.height = height;
exports.ini = ini;
exports.init = init;
exports.isMatrix = isMatrix;
exports.iso = iso;
exports.iterate = iterate;
exports.iterzip = iterzip;
exports.mapper = mapper;
exports.marginCopy = marginCopy;
exports.marginMapper = marginMapper;
exports.marginMutate = marginMutate;
exports.maxBy = maxBy;
exports.minBy = minBy;
exports.mutate = mutate;
exports.mutazip = mutazip;
exports.quazipper = quazipper;
exports.shallow = shallow;
exports.size = size;
exports.some = some;
exports.starter = starter;
exports.transpose = transpose;
exports.trizipper = trizipper;
exports.width = width;
exports.zipper = zipper;
