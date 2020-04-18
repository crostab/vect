import { decoMatrix as decoX, logger, says, xr } from '@spare/logger'
import { unshift } from '../src/unshift'
import { pop } from '../src/pop'
import { shift } from '../src/shift'
import { push } from '../src/push'
import { deco } from '@spare/deco'

const candidates = {
  // row: [[5, 7, 9, 10, 6]],
  column: [[5], [7], [9]],
  // simple: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
  tx_mx: [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']],
  // w_NaN: [[NaN, NaN, NaN], [4, NaN, 6], [7, 8, 9]],
  // empty_vec: [],
  // empty_mx: [[]],
}

const popAndUnshift = () => {
  for (let [key, matrix] of Object.entries(candidates)) {
    matrix |> decoX |> says[key]
    const lastColumn = pop(matrix)
    lastColumn |> deco |>  says.lastColumn
    matrix |> deco |> says.popped
    unshift(matrix, lastColumn)
    matrix |> decoX |> says.unshifted
  }
}

const shiftAndPush = () => {
  for (let [key, matrix] of Object.entries(candidates)) {
    matrix |> decoX |> says[key]
    const firstColumn = shift(matrix)
    firstColumn |> deco |> says.firstColumn
    matrix |> deco |> says.shifted
    push(matrix, firstColumn)
    matrix |> decoX |> says.pushed
  }
}
popAndUnshift()
shiftAndPush()
