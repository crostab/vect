import { deco } from '@spare/deco'
import { says } from '@spare/xr'
import { keep } from '../index'

// const vec = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]
const vec = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]

{
  let arr = vec.slice()
  keep(arr, []) |> deco |> says['selected']
  arr |> deco |> says['original'].br('turned-into')
}

{
  let arr = vec.slice()
  keep(arr, [ 1, 3, 4 ]) |> deco |> says['selected']
  arr |> deco |> says['original'].br('turned-into')
}

{
  let arr = vec.slice()
  keep(arr, [ 0, 1, 2 ]) |> deco |> says['selected']
  arr |> deco |> says['original'].br('turned-into')
}