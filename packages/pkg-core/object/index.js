// import * as Init   from '@vect/object-init'
// import * as Mapper from '@vect/object-mapper'
// import * as Select from '@vect/object-select'
// import * as Update from '@vect/object-update'
// import * as Zipper from '@vect/object-zipper'
//
// export const { iterate, iterateEntries, iterateKeys, mapEntries, mapKeys, mapper, mutate } = Mapper
// export const { mutazip, zipper, iterzip } = Zipper
// export const { init, initByValues, iso, ob, pair, wind, initFromKeys } = Init
// export const { leap, lookupKeys, select, selectValues, shuffle } = Select
// export const { replenish } = Update

export { iterate, iterateEntries, iterateKeys, mapEntries, mapKeys, mapper, mutate } from '@vect/object-mapper'
export { mutazip, zipper, iterzip }                                                  from '@vect/object-zipper'
export { init, initByValues, iso, ob, pair, wind, mapToObject }                      from '@vect/object-init'
export {
  leap,
  shuffle,
  select, selectObject, SelectObject,
  values, selectValues, SelectValues,
  lookupKeys,
  firstKey, firstValue, firstEntry, lastKey, lastValue, lastEntry,
}                                                                                    from '@vect/object-select'
export { replenish }                                                                 from '@vect/object-update'

