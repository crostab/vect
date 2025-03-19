export { Duozipper, Quazipper, Trizipper, duozipper, iterzip, mutazip, quazipper, trizipper, zipper } from '@vect/matrix-zipper';
export { entries, entriesBy, entriesOf, entriesTo, entryIndexed, entryIndexedBy, entryIndexedOf, entryIndexedTo, indexed, indexedBy, indexedOf, indexedTo, iterate, mapper, mutate, points, pointsBy, pointsOf, pointsTo, rows, rowsBy, rowsOf, rowsTo, selectMutate, tripletIndexed, tripletIndexedBy, tripletIndexedOf, tripletIndexedTo, triplets, tripletsBy, tripletsOf, tripletsTo } from '@vect/matrix-mapper';
export { columns, columnsBy, columnsIterate, columnsMapper, columnsOf, columnsTo } from '@vect/columns-mapper';
export { draft, init, iso, product, shallow } from '@vect/matrix-init';
export { every, some } from '@vect/matrix-quantifier';
export { transpose } from '@vect/matrix-algebra';
export { Columns } from '@vect/column-getter';
export { divide, select, selectEntries, selectObject, separate } from '@vect/columns-select';
export { pop, push, shift, splices, unshift } from '@vect/columns-update';
export { coins, column, height, isMatrix, size, width } from '@vect/matrix-index';

const POINTWISE = 0;
const ROWWISE = 1;
const COLUMNWISE = 2;

// export { marginCopy, marginMapper, marginMutate }       from '@vect/matrix-margin'
// export { maxBy, minBy, Max, Min }                       from '@vect/matrix-indicator'

export { COLUMNWISE, POINTWISE, ROWWISE };
