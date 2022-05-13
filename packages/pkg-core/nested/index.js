export { iterate, iterateXY, iterateY, indexedIterate, indexedMutate, } from './src/mapper'
export { side, head }                                                   from './src/indexes'
export { nestedToRows }                                                 from './src/convert'
export { transpose }                                                    from './src/transpose'
export {
  updateCell, appendCell, assignCell, updateCell as update,
  getRow, getOr, getOrVec,
}                                                                       from './src/update'
export {
  indexedOf,
  indexedBy,
  indexedTo,
  indexed,
}                                                                       from './src/indexed'