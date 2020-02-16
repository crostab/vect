import * as Mapper from '@vect/matrix-mapper'
import * as Zipper from '@vect/matrix-zipper'
import * as Quantifier from '@vect/matrix-quantifier'
import * as Size from '@vect/matrix-size'
import * as Transpose from '@vect/matrix-transpose'

export const { mutate, mapper } = Mapper
export const { zipper, mutazip } = Zipper
export const { every, some } = Quantifier
export const { size, width, height } = Size
export const { transpose } = Transpose

export { coins } from './src/coins'
export { isMatrix } from './src/isMatrix'
export { copyMargin } from './src/matrix-margin/copyMargin'
export { mapMargin } from './src/matrix-margin/mapMargin'
