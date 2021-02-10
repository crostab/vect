import * as Algebra from '@vect/vector-algebra';
import * as Index from '@vect/vector-index';
import * as Indicate from '@vect/vector-indicator';
import * as Init from '@vect/vector-init';
import * as Mapper from '@vect/vector-mapper';
import * as Margin from '@vect/vector-margin';
import * as Merge from '@vect/vector-merge';
import * as Select from '@vect/vector-select';
import * as Update from '@vect/vector-update';
import * as Zipper from '@vect/vector-zipper';

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
  union,
  intersect,
  difference
} = Algebra;
const {
  first,
  last
} = Index;

export { Duozipper, Indicator, Max, Min, Piler, Quazipper, Trizipper, acquire, difference, divide, draft, first, init, intersect, iso, iterate, last, leap, mapper, marginCopy, marginMapper, marginMutate, maxBy, merge, merges, minBy, mutate, mutazip, partition, range, reviter, select, selectEntry, seq, shuffle, splices, union, zipper };
