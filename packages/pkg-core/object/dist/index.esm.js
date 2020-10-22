import * as Init from '@vect/object-init';
import * as Mapper from '@vect/object-mapper';
import * as Select from '@vect/object-select';
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
  zipper
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

export { init, initByValues, iso, iterate, iterateEntries, iterateKeys, leap, lookupKeys, mapEntries, mapKeys, mapper, mutate, mutazip, ob, pair, select, selectValues, shuffle, wind, zipper };
