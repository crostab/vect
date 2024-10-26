import { deco }      from '@spare/deco'
import { logger }    from '@spare/logger'
import { replenish } from '@vect/object-update/src/replenish'

const alpha = {
  foo: 1,
  bar: null,
  zen: false,
  lea: undefined,
}

const beta = {
  foo: 2,
  bar: 3,
  zen: true,
  lea: true
}

replenish(alpha, beta) |> deco |> logger