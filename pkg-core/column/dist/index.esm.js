import * as Mappers from '@vect/column-mapper';
import * as Zippers from '@vect/column-zipper';
import * as Quantifiers from '@vect/column-quantifier';
import * as ColumnGetters from '@vect/column-getter';

const {
  mapper,
  mutate,
  ColumnMapper,
  ColumnMutate
} = Mappers;
const {
  zipper,
  mutazip,
  ColumnZipper,
  ColumnMutazip
} = Zippers;
const {
  every,
  some,
  ColumnEvery,
  ColumnSome
} = Quantifiers;
const {
  column,
  Columns
} = ColumnGetters;

export { ColumnEvery, ColumnMapper, ColumnMutate, ColumnMutazip, ColumnSome, ColumnZipper, Columns, column, every, mapper, mutate, mutazip, some, zipper };
