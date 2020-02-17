import * as Mapper from '@vect/matrix-mapper'
import * as Zipper from '@vect/matrix-zipper'
import * as Quantifier from '@vect/matrix-quantifier'
import * as Size from '@vect/matrix-size'
import * as Transpose from '@vect/matrix-transpose'
import * as ColumnsMapper from '@vect/columns-mapper'
import * as Initializer from '@vect/matrix-init'

export const { mutate, mapper } = Mapper
export const { zipper, mutazip } = Zipper
export const { every, some } = Quantifier
export const { size, width, height } = Size
export const { transpose } = Transpose
export const { mapper: columnsMapper } = ColumnsMapper
export const { fab, iso, ini, starter } = Initializer

export { coins } from './src/coins'
export { isMatrix } from './src/isMatrix'
export { copyMargin } from './src/matrix-margin/copyMargin'
export { mapMargin } from './src/matrix-margin/mapMargin'
export { POINTWISE, ROWWISE, COLUMNWISE, Directs } from './resources/Directs'
