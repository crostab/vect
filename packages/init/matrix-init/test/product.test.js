import { decoMatrix } from '@spare/logger'
import { product }    from '../index.js'

const side = [ 1, 2, 3, 4, 5 ]
const head = [ 'A', 'B', 'C' ]
const matrix = product(side, head, (x, y) => y + x)
matrix |> decoMatrix |> console.log