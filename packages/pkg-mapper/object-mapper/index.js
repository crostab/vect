export {
  iterateKeys,
  iterateValues,
  iterateEntries,
  iterateValues as iterate
}                 from './src/iterate'
export {
  mapKey,
  mapVal,
  mapEntry,
  mapKeyVal,
  mapVal as mapper,
  mapKey as mapKeys,
  mapVal as mapValues,
  mapKeyVal as mapKeyValue,
  mapEntries,
}                 from './src/mapper'
export { mutate } from './src/mutate'
export {
  indexedOf,
  indexedBy,
  indexedTo,
  indexed,
  indexedVia,
  indexedOf as simpleIndexed,
  indexedBy as filterIndexed,
  indexedTo as mappedIndexed,
  indexedVia as filterMappedIndexed
}                 from './src/indexed'
