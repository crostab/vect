import * as Mapper from '@vect/vector-mapper';
import { iterate as iterate$1 } from '@vect/vector-mapper';
import * as Indicate from '@vect/vector-indicator';
import * as Init from '@vect/vector-init';
import * as Margin from '@vect/vector-margin';
import * as Merge from '@vect/vector-merge';
import * as Select from '@vect/vector-select';
import * as Update from '@vect/vector-update';
import * as Zipper from '@vect/vector-zipper';

const union = (a, b) => {
  const ve = a.slice();
  iterate$1(b, x => {
    if (!a.includes(x)) ve.push(x);
  });
  return ve;
};

const intersect = (a, b) => {
  const ve = [];
  iterate$1(a, x => {
    if (b.includes(x)) ve.push(x);
  });
  return ve;
};

const difference = (a, b) => {
  const ve = [];
  iterate$1(a, x => {
    if (!b.includes(x)) ve.push(x);
  });
  return ve;
};

var Algebra = /*#__PURE__*/Object.freeze({
  __proto__: null,
  difference: difference,
  intersect: intersect,
  union: union
});

const {
  iterate,
  reviter,
  mapper,
  mutate
} = Mapper;
const {
  marginCopy,
  marginMapper,
  marginMutate
} = Margin;
const {
  zipper,
  mutazip,
  Duozipper,
  Trizipper,
  Quazipper
} = Zipper;
const {
  maxBy,
  minBy,
  Max,
  Min,
  Piler,
  Indicator
} = Indicate;
const {
  draft,
  iso,
  init,
  seq,
  range
} = Init;
const {
  splices,
  partition
} = Update;
const {
  divide,
  leap,
  select,
  selectEntry,
  shuffle
} = Select;
const {
  acquire,
  merge,
  merges
} = Merge;
const {
  union: union$1,
  intersect: intersect$1,
  difference: difference$1
} = Algebra;

export { Duozipper, Indicator, Max, Min, Piler, Quazipper, Trizipper, acquire, difference$1 as difference, divide, draft, init, intersect$1 as intersect, iso, iterate, leap, mapper, marginCopy, marginMapper, marginMutate, maxBy, merge, merges, minBy, mutate, mutazip, partition, range, reviter, select, selectEntry, seq, shuffle, splices, union$1 as union, zipper };
