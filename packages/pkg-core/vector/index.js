import * as Algebra  from '@vect/vector-algebra'
import * as Index    from '@vect/vector-index'
import * as Indicate from '@vect/vector-indicator'
import * as Init     from '@vect/vector-init'
import * as Mapper   from '@vect/vector-mapper'
import * as Margin   from '@vect/vector-margin'
import * as Merge    from '@vect/vector-merge'
import * as Select   from '@vect/vector-select'
import * as Update   from '@vect/vector-update'
import * as Zipper   from '@vect/vector-zipper'

export const { iterate, reviter, mapper, mutate } = Mapper
export const { marginCopy, marginMapper, marginMutate } = Margin
export const { zipper, mutazip, Duozipper, Trizipper, Quazipper } = Zipper
export const { maxBy, minBy, Max, Min, Piler, Indicator } = Indicate
export const { draft, iso, init, seq, range } = Init
export const { splices, partition } = Update
export const { divide, leap, select, selectEntry, shuffle } = Select
export const { acquire, merge, merges } = Merge
export const { union, intersect, difference } = Algebra
export const { first, last } = Index

