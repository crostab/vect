import * as Initializer from '@vect/matrix-init'
import * as Mapper from '@vect/matrix-mapper'
import * as Margin from '@vect/matrix-margin'
import * as Zipper from '@vect/matrix-zipper'
import * as Quantifier from '@vect/matrix-quantifier'
import * as Indicator from '@vect/matrix-indicator'
import * as Size from '@vect/matrix-size'
import * as Transpose from '@vect/matrix-transpose'

import * as ColumnsMapper from '@vect/columns-mapper'
import * as ColumnGetter from '@vect/column-getter'

export const { fab, iso, ini, starter } = Initializer
export const { mutate, mapper } = Mapper
export const { marginCopy, marginMapper, marginMutate } = Margin
export const { zipper, mutazip, Duozipper, Trizipper, Quazipper } = Zipper
export const { maxBy, minBy, Max, Min } = Indicator
export const { every, some } = Quantifier
export const { size, width, height } = Size
export const { transpose } = Transpose
export const { mapper: columnsMapper } = ColumnsMapper
export const { column, Columns } = ColumnGetter

export { coins } from './src/coins'
export { isMatrix } from './src/isMatrix'
export { POINTWISE, ROWWISE, COLUMNWISE, Directs } from './resources/Directs'
