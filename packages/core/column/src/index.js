import * as ColumnGetter from '@vect/column-getter'
import * as Indicator    from '@vect/column-indicator'
import * as Mapper       from '@vect/column-mapper'
import * as Quantifier   from '@vect/column-quantifier'
import * as Zipper       from '@vect/column-zipper'

export const { iterate, mapper, mutate, ColumnIterate, ColumnMapper, ColumnMutate } = Mapper
export const {
               zipper,
               mutazip,
               iterzip,
               ColumnZipper,
               ColumnMutazip,
               duozipper,
               trizipper,
               quazipper,
               Duozipper,
               Trizipper,
               Quazipper
             } = Zipper
export const { every, some, ColumnEvery, ColumnSome } = Quantifier
export const { maxBy, minBy, Max, Min } = Indicator
export const { column, Columns } = ColumnGetter




