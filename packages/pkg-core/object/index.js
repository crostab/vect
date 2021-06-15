import * as Init   from '@vect/object-init'
import * as Mapper from '@vect/object-mapper'
import * as Select from '@vect/object-select'
import * as Update from '@vect/object-update'
import * as Zipper from '@vect/object-zipper'

export const { iterate, iterateEntries, iterateKeys, mapEntries, mapKeys, mapper, mutate } = Mapper
export const { mutazip, zipper, iterzip } = Zipper
export const { init, initByValues, iso, ob, pair, wind } = Init
export const { leap, lookupKeys, select, selectValues, shuffle } = Select
export const { replenish } = Update

