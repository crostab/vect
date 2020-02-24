import * as Mapper from '@vect/vector-mapper';
import * as Margin from '@vect/vector-margin';
import * as Zipper from '@vect/vector-zipper';
import * as Indicator from '@vect/vector-indicator';
import * as Init from '@vect/vector-init';
export { select } from '@vect/vector-select';
export { splices } from '@vect/vector-update';

const {
  iterate,
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
  Min
} = Indicator;
const {
  draft,
  iso,
  init,
  seq,
  range
} = Init;

export { Duozipper, Max, Min, Quazipper, Trizipper, draft, init, iso, iterate, mapper, marginCopy, marginMapper, marginMutate, maxBy, minBy, mutate, mutazip, range, seq, zipper };
