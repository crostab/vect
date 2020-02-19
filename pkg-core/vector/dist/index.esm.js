import * as Mapper from '@vect/vector-mapper';
import * as Margin from '@vect/vector-margin';
import * as Zipper from '@vect/vector-zipper';
import * as Indicator from '@vect/vector-indicator';

const {
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

export { Duozipper, Max, Min, Quazipper, Trizipper, mapper, marginCopy, marginMapper, marginMutate, maxBy, minBy, mutate, mutazip, zipper };
