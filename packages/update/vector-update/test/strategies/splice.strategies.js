import { decoCrostab, logger, says } from '@spare/logger'
import { strategies }                from '@valjoux/strategies'
import { dateTime }                  from '@valjoux/timestamp-pretty'
import { rollLo }                    from '@vect/vector-index'

const topUpDev = (vec, inds) => {
  const hi = inds.length
  let pi = 0, lo = inds[0], i
  while (++pi < hi)
    if ((i = inds[pi]) !== ++lo) rollLo.call(vec, i, lo)
  return vec
}

const topUpArc = (vec, inds) => {
  let lo = inds[0]
  for (let i of inds) { // `[i] (${i}) [lo] (${lo}) [inds] (${inds})` |> logger
    if (i > lo) rollLo.call(vec, i, lo)
    lo++
  }
  return vec
}

const test = () => {
  const { lapse, result } = strategies({
    repeat: 1E+6,
    candidates: {
      alpha: [ [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], [ 0 ] ],
      beta: [ [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], [ 0, 1, 2 ] ],
      gamma: [ [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], [ 1, 3, 5, 7 ] ],
    },
    methods: {
      dev: (vec, inds) => topUpDev(vec.slice(), inds).splice(inds[0], inds.length),
      arc: (vec, inds) => topUpArc(vec.slice(), inds).splice(inds[0], inds.length)
    }
  })
  lapse |> decoCrostab |> says['lapse'].p(dateTime())
  '' |> logger
  result |> decoCrostab |> says['result'].p(dateTime())
}
test()