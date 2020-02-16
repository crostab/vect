import * as matrixMapper from '@vect/matrix-mapper'

export const mapper = matrixMapper.mapper
export const mutate = matrixMapper.mutate

export { coins } from './src/coins'
export { isMatrix } from './src/isMatrix'
export { size, width } from '@vect/matrix-size'
export { transpose } from '@vect/matrix-transpose'

export { zipper, mutazip } from '@vect/matrix-zipper'
export { every, some } from '@vect/matrix-quantifier'
export { copyMargin } from './src/matrix-margin/copyMargin'
export { mapMargin } from './src/matrix-margin/mapMargin'
