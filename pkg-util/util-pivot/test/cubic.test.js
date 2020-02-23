import { ACCUM, INCRE, SUM } from '../resources/PivotModes'
import { decoCrostab, logger, says } from '@spare/logger'
import { deco, delogger } from '@spare/deco'
import { numSkeleton } from '../utils/skeleton'
import { cubicSpread } from '../src/cubicSpread'
import { cubicRecord } from '../src/cubicRecord'

const duties = {
  head: ['day', 'name', 'served', 'sold', 'adt'],
  rows: [
    [1, 'Joyce', 70, 7, ''],
    [1, 'Joyce', 66, 15, ''],
    [2, 'Joyce', 86, 10, ''],
    [2, 'Joyce', NaN, NaN, ''],
    [3, 'Joyce', 96, 2, ''],
    [1, 'Lance', 98, 15, ''],
    [1, 'Lance', 66, 15, ''],
    [2, 'Lance', 85, 12, ''],
    [2, 'Lance', 63, 12, ''],
    [3, 'Lance', NaN, NaN, ''],
    [1, 'Naomi', 90, 14, ''],
    [1, 'Naomi', 66, 9, ''],
    [2, 'Naomi', NaN, NaN, ''],
    [2, 'Naomi', 93, 16, ''],
    [3, 'Naomi', 78, 8, ''],
  ]
}

const dutiesBeta = {
  head: ['day', 'name', 'served', 'sold', 'adt'],
  rows: [
    [3, 'Joyce', 100, 10, ''],
    [3, 'Lance', 100, 10, ''],
    [3, 'Naomi', 100, 10, ''],
  ]
}

let notes = numSkeleton()
const sampleCubic = cubicSpread.bind(notes)
notes = sampleCubic(duties.rows, {
  row: 0, col: 1, cell: [
    { index: 2, mode: INCRE },
    { index: 3, mode: ACCUM }
  ], filter: r => true
})
notes |> deco |> says.spread

const sampleCubicRecord = cubicRecord.bind(notes)
notes = sampleCubicRecord(dutiesBeta.rows, {
  row: 0, col: 1, cell: [
    { index: 2, mode: INCRE },
    { index: 3, mode: ACCUM }
  ], filter: r => true
})
notes |> deco |> says.record
