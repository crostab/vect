// insert A[current position] -> to projected position
// if curr < proj, swap curr and proj
// if curr > proj,
// 0,1,2,3,4,5,6, like insert A[4] to A[1],
// swap A[4] to A[3], A[3] to A[2], A[2] to A[1]
import { deco } from '@spare/deco'
import { says, xr } from '@spare/logger'

// xr().p('curr')[p](this[p]).p('proj')[p + 1](this[p + 1]) |> says[p]



const vecForAsc = [0, 1, 2, 3, 4, 5, 6]
vecForAsc |> deco |> says['original']
insertUp.call(vecForAsc, 1, 4)
vecForAsc |> deco |> says['insertUp']

const vecForDesc = [0, 1, 2, 3, 4, 5, 6]
vecForDesc |> deco |> says['original']
insertDown.call(vecForDesc, 4, 1)
vecForDesc |> deco |> says['insertUp']
