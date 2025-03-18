import { min as dmin } from '@aryth/comparer'
import { acquire }     from '@vect/merge-acquire'
import { rand }        from '@aryth/rand'
import { strategies } from '@valjoux/strategies'
import { decoCrostab, says } from '@spare/logger'
import {leap } from '../src/leap.js'

const range = [0, 1, 2, 3, 4]

export const leapClassic = (ar, min, dif) => {
  const l = ar.length
  min = min ? dmin(min, l - 1) : rand(l)
  const vec = Array(dif)
  let i = min, j = 0
  while (j < dif) {
    vec[j++] = ar[i < l ? i : i % l]
    i++
  }
  return vec
}

export const leapDev = (ar, min, dif) => {
  const l = ar.length
  min = min ? dmin(min, l - 1) : rand(l)
  let max = min + dif, ve
  if ((max -= l) >= 0) { ve = ar.slice(min, l) } else { return ar.slice(min, max) }
  do { acquire(ve, ar.slice(0, dmin(max, l))) } while ((max -= l) > 0)
  return ve
}

const { lapse, result } = strategies({
  repeat: 1E+6,
  candidates: {
    simple: [range, 2, 11],
    misc: [range, 2, 3],
  },
  methods: {
    bench: x => x,
    leapClassic,
    leapDev,
    leap,
    _: x => ''
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
