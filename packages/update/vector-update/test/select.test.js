import { deco }    from '@spare/deco'
import { says }    from '@spare/xr'
import { fitRoll } from '@vect/vector-index'
import { keep }    from '../index.js'

const vec = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]
// const vec = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]

{
  let arr = vec.slice()
  keep(arr, []) |> deco |> says['selected']
  arr |> deco |> says['original']
}

{
  let arr = vec.slice()
  keep(arr, fitRoll([ 7, 1, 5, 2 ])) |> deco |> says['selected']
  arr |> deco |> says['original']
}

{
  let arr = vec.slice()
  keep(arr, fitRoll([ 1, 4, -1, 3, 0 ])) |> deco |> says['selected']
  arr |> deco |> says['original']
}