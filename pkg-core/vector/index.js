import * as Mapper from '@vect/vector-mapper'
import * as Margin from '@vect/vector-margin'
import * as Zipper from '@vect/vector-zipper'
import * as Indicator from '@vect/vector-indicator'

export const { mapper, mutate } = Mapper
export const { marginCopy, marginMapper, marginMutate } = Margin
export const { zipper, mutazip, Duozipper, Trizipper, Quazipper } = Zipper
export const { maxBy, minBy, Max, Min } = Indicator

