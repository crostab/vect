import * as Mapper from '@vect/matrix-mapper';
import * as Zipper from '@vect/matrix-zipper';
import * as Quantifier from '@vect/matrix-quantifier';
import * as Size from '@vect/matrix-size';
import * as Transpose from '@vect/matrix-transpose';
import * as ColumnsMapper from '@vect/columns-mapper';
import * as Initializer from '@vect/matrix-init';
import { copyMargin as copyMargin$1 } from '@vect/vector';

/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */
const coins = mx => !Array.isArray(mx) || !Array.isArray(mx[0]) ? [] : mx[0].map((_, i) => i);

const isMatrix = mx => Array.isArray(mx) && Array.isArray(mx[0]);

const copyMargin = (mx, t, b, l, r, h, w) => {
  const x = Array(h),
        bs = h - b;

  for (let i = 0; i < t; i++) x[i] = copyMargin$1(mx[i], l, r, w);

  for (let i = bs; i < h; i++) x[i] = copyMargin$1(mx[i], l, r, w);

  return x;
};

const copyRowMargin = (row, i, fn, l, r, w) => {
  const ve = Array(w),
        s = w - r;

  for (--l; l >= 0; l--) ve[l] = fn(row[l], i, l);

  for (--w; w >= s; w--) ve[w] = fn(row[w], i, w);

  return ve;
};
const mapMargin = (mx, fn, t, b, l, r, h, w) => {
  const x = Array(h),
        bs = h - b;

  for (let i = 0; i < t; i++) x[i] = copyRowMargin(mx[i], i, fn, l, r, w);

  for (let i = bs; i < h; i++) x[i] = copyRowMargin(mx[i], i, fn, l, r, w);

  return x;
};

const POINTWISE = 0;
const ROWWISE = 1;
const COLUMNWISE = 2;
const Directs = {
  pointwise: POINTWISE,
  rowwise: ROWWISE,
  columnwise: COLUMNWISE
};

const {
  mutate,
  mapper
} = Mapper;
const {
  zipper,
  mutazip
} = Zipper;
const {
  every,
  some
} = Quantifier;
const {
  size,
  width,
  height
} = Size;
const {
  transpose
} = Transpose;
const {
  mapper: columnsMapper
} = ColumnsMapper;
const {
  fab,
  iso,
  ini,
  starter
} = Initializer;

export { COLUMNWISE, Directs, POINTWISE, ROWWISE, coins, columnsMapper, copyMargin, every, fab, height, ini, isMatrix, iso, mapMargin, mapper, mutate, mutazip, size, some, starter, transpose, width, zipper };
