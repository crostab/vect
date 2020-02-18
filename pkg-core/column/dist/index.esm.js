import * as Mapper from '@vect/column-mapper';
import * as Zipper from '@vect/column-zipper';
import * as Quantifier from '@vect/column-quantifier';
import * as ColumnGetter from '@vect/column-getter';

const {
  mapper,
  mutate,
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
  column,
  Columns
} = ColumnGetter;

export { ColumnEvery, ColumnMapper, ColumnMutate, ColumnMutazip, ColumnSome, ColumnZipper, Columns, Duozipper, Quazipper, Trizipper, column, every, mapper, mutate, mutazip, some, zipper };
