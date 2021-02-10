import * as ColumnGetter  from '@vect/column-getter'
import * as ColumnsMapper from '@vect/columns-mapper'
import * as Indicator     from '@vect/matrix-indicator'
import * as Init          from '@vect/matrix-init'
import * as Mapper        from '@vect/matrix-mapper'
import * as Margin        from '@vect/matrix-margin'
import * as Quantifier    from '@vect/matrix-quantifier'
import * as Size          from '@vect/matrix-size'
import * as Transpose     from '@vect/matrix-transpose'
import * as Zipper        from '@vect/matrix-zipper'
import { first }          from '@vect/vector-index'

export { select }                             from '@vect/columns-select';
export { pop, push, shift, splices, unshift } from '@vect/columns-update';
export { COLUMNWISE, POINTWISE, ROWWISE }     from '@vect/enum-matrix-directions';

const isMatrix = mx => Array.isArray(mx) && Array.isArray(mx[0]);

/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */

const coins = mx => isMatrix(mx) ? first(mx).map((_, i) => i) : [];

const {
  draft,
  fab,
  iso,
  init,
  ini,
  starter,
  shallow
} = Init;
const {
  iterate,
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
  column,
  Columns
} = ColumnGetter;
const {
  mapper: columnsMapper
} = ColumnsMapper;

export { Columns, Duozipper, Max, Min, Quazipper, Trizipper, coins, column, columnsMapper, draft, every, fab, height, ini, init, isMatrix, iso, iterate, mapper, marginCopy, marginMapper, marginMutate, maxBy, minBy, mutate, mutazip, shallow, size, some, starter, transpose, width, zipper };
