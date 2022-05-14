import { deco }                     from '@spare/deco'
import { says }                 from '@spare/xr'
import { swap, rollLo, rollUp } from '../index'

const vec = [ 0, 1, 2, 3, 4, 5, 6 ]


{
  const v = vec.slice()
  swap.call(v, 1, 4)
  v |> deco |> says['swap']
}
{
  const v = vec.slice()
  rollUp.call(v, 3, 5)
  v |> deco |> says['rollUp']
}
{
  const v = vec.slice()
  rollLo.call(v, 3, 1)
  v |> deco |> says['rollLo']
}