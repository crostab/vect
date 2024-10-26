import { reshape } from '../index.js'

const vec = [ 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4 ]

const mat34 = reshape(vec, 3, 4)
mat34 |> console.log
const mat43 = reshape(vec, 4, 3)
mat43 |> console.log