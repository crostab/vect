import * as Init from '@vect/object-init';
import * as Mapper from '@vect/object-mapper';
import * as Select from '@vect/object-select';
import * as Update from '@vect/object-update';
import * as Zipper from '@vect/object-zipper';

const {
  iterate,
  iterateEntries,
  iterateKeys,
  mapEntries,
  mapKeys,
  mapper,
  mutate
} = Mapper;
const {
  mutazip,
  zipper,
  iterzip
} = Zipper;
const {
  init,
  initByValues,
  iso,
  ob,
  pair,
  wind
} = Init;
const {
  leap,
  lookupKeys,
  select,
  selectValues,
  shuffle
} = Select;
const {
  replenish
} = Update;

export { init, initByValues, iso, iterate, iterateEntries, iterateKeys, iterzip, leap, lookupKeys, mapEntries, mapKeys, mapper, mutate, mutazip, ob, pair, replenish, select, selectValues, shuffle, wind, zipper };
