import * as Mapper from '@vect/vector-mapper';
import * as Margin from '@vect/vector-margin';
import * as Zipper from '@vect/vector-zipper';

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

export { Duozipper, Quazipper, Trizipper, mapper, marginCopy, marginMapper, marginMutate, mutate, mutazip, zipper };
