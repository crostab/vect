import { deco }                     from '@spare/deco'
import { says }                 from '@spare/xr'
import { swap, rollLo, rollUp } from '../index.js'

const vec = [ 0, 1, 2, 3, 4, 5, 6 ]


{
  const v = vec.slice()
  swap.call(v, 1, 4)
  says['swap'](deco(v))
}
{
  const v = vec.slice()
  rollUp.call(v, 3, 5)
  says['rollUp'](deco(v))
}
{
  const v = vec.slice()
  rollLo.call(v, 3, 1)
  says['rollLo'](deco(v))
}