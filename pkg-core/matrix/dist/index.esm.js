import * as Init from '@vect/matrix-init';
import * as Mapper from '@vect/matrix-mapper';
import * as Margin from '@vect/matrix-margin';
import * as Zipper from '@vect/matrix-zipper';
import * as Quantifier from '@vect/matrix-quantifier';
import * as Indicator from '@vect/matrix-indicator';
import * as Size from '@vect/matrix-size';
import * as Transpose from '@vect/matrix-transpose';
import * as ColumnsMapper from '@vect/columns-mapper';
import * as ColumnGetter from '@vect/column-getter';
export { select } from '@vect/columns-select';
export { pop, push, shift, splices, unshift } from '@vect/columns-update';

/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */
const coins = mx => !Array.isArray(mx) || !Array.isArray(mx[0]) ? [] : mx[0].map((_, i) => i);

const isMatrix = mx => Array.isArray(mx) && Array.isArray(mx[0]);

const POINTWISE = 0;
const ROWWISE = 1;
const COLUMNWISE = 2;
const Directs = {
  pointwise: POINTWISE,
  rowwise: ROWWISE,
  columnwise: COLUMNWISE
};

const {
  draft,
  fab,
  iso,
  init,
  ini,
  starter
} = Init;
const {
  mutate,
  mapper
} = Mapper;
const {
  marginCopy,
  marginMapper,
  marginMutate
} = Margin;
const {
  zipper,
  mutazip,
  Duozipper,
  Trizipper,
  Quazipper
} = Zipper;
const {
  maxBy,
  minBy,
  Max,
  Min
} = Indicator;
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
  column,
  Columns
} = ColumnGetter;

export { COLUMNWISE, Columns, Directs, Duozipper, Max, Min, POINTWISE, Quazipper, ROWWISE, Trizipper, coins, column, columnsMapper, draft, every, fab, height, ini, init, isMatrix, iso, mapper, marginCopy, marginMapper, marginMutate, maxBy, minBy, mutate, mutazip, size, some, starter, transpose, width, zipper };
