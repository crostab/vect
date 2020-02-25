import * as Mapper from '@vect/vector-mapper'
import * as Margin from '@vect/vector-margin'
import * as Zipper from '@vect/vector-zipper'
import * as Indicator from '@vect/vector-indicator'
import * as Init from '@vect/vector-init'

export const { iterate, mapper, mutate } = Mapper
export const { marginCopy, marginMapper, marginMutate } = Margin
export const { zipper, mutazip, Duozipper, Trizipper, Quazipper } = Zipper
export const { maxBy, minBy, Max, Min } = Indicator
export const { draft, iso, init, seq, range } = Init

export { select } from '@vect/vector-select'
export { splices } from '@vect/vector-update'

