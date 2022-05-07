import * as ColumnGetter  from '@vect/column-getter'
import * as ColumnsMapper from '@vect/columns-mapper'
import * as Indicator     from '@vect/matrix-indicator'
import * as Init          from '@vect/matrix-init'
import * as Mapper        from '@vect/matrix-mapper'
import * as Margin        from '@vect/matrix-margin'
import * as Quantifier from '@vect/matrix-quantifier'
import * as Size       from '@vect/matrix-index'
import * as Transpose  from '@vect/matrix-transpose'
import * as Zipper        from '@vect/matrix-zipper'

export const { draft, fab, iso, init, ini, starter, shallow } = Init
export const { iterate, mutate, mapper } = Mapper
export const { marginCopy, marginMapper, marginMutate } = Margin
export const { zipper, mutazip, iterzip, duozipper, trizipper, quazipper, Duozipper, Trizipper, Quazipper } = Zipper
export const { maxBy, minBy, Max, Min } = Indicator
export const { every, some } = Quantifier
export const { size, width, height } = Size
export const { transpose } = Transpose
export const { column, Columns } = ColumnGetter
export const { mapper: columnsMapper } = ColumnsMapper

export { select }                             from '@vect/columns-select'
export { pop, push, shift, unshift, splices } from '@vect/columns-update'

export { coins }                          from './src/coins'
export { isMatrix }                       from './src/isMatrix'
export { POINTWISE, ROWWISE, COLUMNWISE } from '@vect/enum-matrix-directions'
