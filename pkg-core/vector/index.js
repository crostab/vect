import * as Mappers from '@vect/vector-mapper'
import * as Zippers from '@vect/vector-zipper'

export const mapper = Mappers.mapper
export const mutate = Mappers.mutate
export const zipper = Zippers.zipper
export const mutazip = Zippers.mutazip

export { copyMargin } from './src/vector-margin/copyMargin'
export { mapMargin } from './src/vector-margin/mapMargin'
