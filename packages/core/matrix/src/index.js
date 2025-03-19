export {
  zipper, mutazip, iterzip, duozipper, trizipper, quazipper, Duozipper, Trizipper, Quazipper
} from '@vect/matrix-zipper'
export {
  entries, entriesBy, entriesOf, entriesTo, entryIndexed, entryIndexedBy, entryIndexedOf, entryIndexedTo, indexed,
  indexedBy, indexedOf, indexedTo, iterate, mapper, mutate, points, pointsBy, pointsOf, pointsTo, selectMutate,
  tripletIndexed, tripletIndexedBy, tripletIndexedOf, tripletIndexedTo, triplets, tripletsBy, tripletsOf, tripletsTo,
  rows, rowsBy, rowsOf, rowsTo,
} from '@vect/matrix-mapper'

export {
  columns, columnsBy, columnsOf, columnsTo, columnsIterate, columnsMapper
} from '@vect/columns-mapper'

export { draft, init, iso, product, shallow }                    from '@vect/matrix-init'
export { every, some }                                           from '@vect/matrix-quantifier'
export { transpose }                                             from '@vect/matrix-algebra'
export { Columns }                                               from '@vect/column-getter'
export { select, divide, separate, selectEntries, selectObject } from '@vect/columns-select'
export { pop, push, shift, unshift, splices }                    from '@vect/columns-update'
export { coins, isMatrix, column, height, width, size }          from '@vect/matrix-index'

export const POINTWISE = 0
export const ROWWISE = 1
export const COLUMNWISE = 2

// export { marginCopy, marginMapper, marginMutate }       from '@vect/matrix-margin'
// export { maxBy, minBy, Max, Min }                       from '@vect/matrix-indicator'
