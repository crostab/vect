import { DecoTable, says, xr } from '@spare/logger'
import { delogNeL } from '@spare/deco'
import { swap }     from '@vect/vector-index'
import { ROWWISE }  from '@vect/matrix'
import { round } from '@aryth/math'
import { insertUp, insertDown } from './insertion.test'

const partition = (vec, ins) => {
  let i = 0, dep = ins.length, cu = ins[0], nx
  while (++i < dep) {
    if ((nx = ins[i]) !== ++cu) {
      swap.call(vec, nx, cu) // ins[i] = cu
      xr()['curr'](cu)['next'](nx)['swapped'](vec) |> says[i]
    }
  }
  return vec
}

const partitionByInsertion = (vec, ins) => {
  let i = 0, dep = ins.length, cu = ins[0], nx
  while (++i < dep) {
    if ((nx = ins[i]) !== ++cu) {
      const original = vec.slice()
      insertDown.call(vec, nx, cu) // ins[i] = cu
      xr(original)['curr'](cu)['next'](nx)['swapped'](vec) |> says[i]
    }
  }
  return vec
}

const partitionReversed = (vec, ins) => {
  let l = ins.length, cu = ins[0] + l, pr
  while (l > 0) {
    if ((pr = ins[--l]) !== --cu) {
      swap.call(vec, cu, pr) , ins[l] = cu
      xr()['curr'](cu)['prev'](pr)['swapped'](vec) |> says[l]
    }
  }
  return [vec, ins]
}

const partitionSparse = (vec, ins) => {
  let i = 0, dep = ins.length, cu = ins[0], nx
  while (++i < dep) {
    if ((nx = ins[i]) !== ++cu) {
      swap.call(vec, nx, cu + vec.length) // ins[i] = cu
      xr()['curr'](cu)['next'](nx)['swapped'](vec) |> says[i]
    }
  }
  return vec
}

const candidates = {
  // alphabeticEven: [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], [0, 2, 4, 6, 8]],
  // alphabeticOdd: [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], [1, 3, 5, 7, 9]],
  // alphabeticMisc: [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], [1, 4, 5, 7]],
  numericEven: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8]],
  numericOdd: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 3, 5, 7, 9]],
  numericMisc: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 4, 5, 7]],
}

for (const [key, [vec, ins]] of Object.entries(candidates)) {
  ({ rows: [Object.keys(vec)], head: vec }) |> DecoTable({ direct: ROWWISE }) |> says[key]
  partitionByInsertion.call(null, vec, ins) |> delogNeL
}

`Current script is using approx ${round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB` |> says['heapUsed']
