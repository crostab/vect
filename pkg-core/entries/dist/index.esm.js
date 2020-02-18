import * as Mapper from '@vect/entries-mapper';
import * as Margin from '@vect/entries-margin';
import * as Zipper from '@vect/entries-zipper';
import * as Unwind from '@vect/entries-unwind';

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
  unwind
} = Unwind;

export { Duozipper, Quazipper, Trizipper, mapper, marginCopy, marginMapper, marginMutate, mutate, mutazip, unwind, zipper };
