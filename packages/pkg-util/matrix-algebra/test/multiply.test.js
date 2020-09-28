import { decoMatrix, logger } from '@spare/logger'
import { multiply }           from '../src/algebra'

export const test = () => {
  const ma = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
  ]
  const mb = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
  ]
  const mx = multiply(ma, mb)
  mx |> decoMatrix |> logger
}

test()