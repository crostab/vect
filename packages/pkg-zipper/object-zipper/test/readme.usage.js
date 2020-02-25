import { zipper, mutazip, zipKeys, zipEntries } from '..'

const ot = {
  AMEE: 'Red Planet',
  AMP: 'Avatar',
  Maximilian: 'The Black Hole',
  Terminatrix: 'Terminator 3',
}

zipper(ot, value => value.length)
zipKeys(ot, key => key.slice(0, 4))
zipEntries(ot, ([key, value], i) => [`${key}_${i}`, value.length])
mutazip(ot, value => value.length)

