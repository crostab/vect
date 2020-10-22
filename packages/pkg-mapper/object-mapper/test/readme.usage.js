import { mapper, mutate, mapKeys, mapEntries } from '..'

const ob = {
  AMEE: 'Red Planet',
  AMP: 'Avatar',
  Maximilian: 'The Black Hole',
  Terminatrix: 'Terminator 3',
}

mapper(ob, value => value.length)
mapKeys(ob, key => key.slice(0, 4))
mapEntries(ob, ([key, value], i) => [`${key}_${i}`, value.length])
mutate(ob, value => value.length)

