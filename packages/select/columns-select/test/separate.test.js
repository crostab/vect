import { decoMatrix } from '@spare/logger'
import { says }       from '@spare/xr'
import { separate }   from '../src/divide.js'

const matrix = [ [ 0, 5, 7, 8 ], [ 8, 10, 11, 11 ], [ 12, 14, 16, 23 ] ]

matrix |> decoMatrix |> says['matrix']
const sep1 = separate(matrix, [ 1, 3 ])
const [ pick, rest ] = sep1
pick|> decoMatrix |> says['pick']
rest|> decoMatrix |> says['rest']