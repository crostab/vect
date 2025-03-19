import * as Indicator from '@vect/entries-indicator'
import * as Init      from '@vect/entries-init'
import * as Mapper    from '@vect/entries-mapper'
import * as Margin    from '@vect/entries-margin'
import * as Zipper    from '@vect/entries-zipper'

export const { draft, wind, iso, voidEntry, unwind } = Init
export const { iterate, mapper, mutate } = Mapper
export const { marginCopy, marginMapper, marginMutate } = Margin
export const { zipper, mutazip, iterzip, duozipper, trizipper, quazipper, Duozipper, Trizipper, Quazipper } = Zipper
export const { maxBy, minBy, Max, Min } = Indicator

