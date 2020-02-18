import * as Mapper from '@vect/entries-mapper'
import * as Margin from '@vect/entries-margin'
import * as Zipper from '@vect/entries-zipper'
import * as Unwind from '@vect/entries-unwind'

export const { mapper, mutate } = Mapper
export const { marginCopy, marginMapper, marginMutate } = Margin
export const { zipper, mutazip, Duozipper, Trizipper, Quazipper } = Zipper
export const { unwind } = Unwind
