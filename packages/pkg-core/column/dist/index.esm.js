import * as ColumnGetter from '@vect/column-getter';
import * as Indicator from '@vect/column-indicator';
import * as Mapper from '@vect/column-mapper';
import * as Quantifier from '@vect/column-quantifier';
import * as Zipper from '@vect/column-zipper';

const {
  iterate,
  mapper,
  mutate,
  ColumnIterate,
  ColumnMapper,
  ColumnMutate
} = Mapper;
const {
  zipper,
  mutazip,
  ColumnZipper,
  ColumnMutazip,
  Duozipper,
  Trizipper,
  Quazipper
} = Zipper;
const {
  every,
  some,
  ColumnEvery,
  ColumnSome
} = Quantifier;
const {
  maxBy,
  minBy,
  Max,
  Min
} = Indicator;
const {
  column,
  Columns
} = ColumnGetter;

export { ColumnEvery, ColumnIterate, ColumnMapper, ColumnMutate, ColumnMutazip, ColumnSome, ColumnZipper, Columns, Duozipper, Max, Min, Quazipper, Trizipper, column, every, iterate, mapper, maxBy, minBy, mutate, mutazip, some, zipper };
