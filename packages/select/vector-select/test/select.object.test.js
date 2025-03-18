import { decoMatrix, logger } from '@spare/logger'
import { select }             from '../src/select.js'

const samples = [
  { index: 0, foo: 'a', bar: 2, zen: 10 },
  { index: 0, foo: 'b', bar: 4, zen: 100 },
  { index: 0, foo: 'c', bar: 8, zen: 1000 },
  { index: 0, foo: 'd', bar: 16, zen: 10000 },
]

samples.map(sample => select(sample, ['foo', 'zen'], 2))  |> decoMatrix |> logger