import * as Indicator from '@vect/entries-indicator';
import * as Init from '@vect/entries-init';
import * as Mapper from '@vect/entries-mapper';
import * as Margin from '@vect/entries-margin';
import * as Zipper from '@vect/entries-zipper';

const { draft, wind, iso, voidEntry, unwind } = Init;
const { iterate, mapper, mutate } = Mapper;
const { marginCopy, marginMapper, marginMutate } = Margin;
const { zipper, mutazip, iterzip, duozipper, trizipper, quazipper, Duozipper, Trizipper, Quazipper } = Zipper;
const { maxBy, minBy, Max, Min } = Indicator;

export { Duozipper, Max, Min, Quazipper, Trizipper, draft, duozipper, iso, iterate, iterzip, mapper, marginCopy, marginMapper, marginMutate, maxBy, minBy, mutate, mutazip, quazipper, trizipper, unwind, voidEntry, wind, zipper };
