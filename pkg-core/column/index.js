import * as Mappers from '@vect/column-mapper'
import * as Zippers from '@vect/column-zipper'
import * as Quantifiers from '@vect/column-quantifier'

export const { mapper, mutate, ColumnMapper, ColumnMutate } = Mappers
export const { zipper, mutazip, ColumnZipper, ColumnMutazip } = Zippers
export const { every, some, ColumnEvery, ColumnSome } = Quantifiers

export { column } from './src/column'




