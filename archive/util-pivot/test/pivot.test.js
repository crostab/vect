import { deco, delogger }            from '@spare/deco'
import { decoCrostab, logger, says } from '@spare/logger'
import { Pivot }                     from '../function/Pivot'
import { SUM }                       from '../resources/PivotModes'
import { pivotRecord }               from '../src/pivotRecord'
import { pivotSpread }               from '../src/pivotSpread'
import { numSkeleton }               from '../utils/skeleton'

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
const sampleSpreader = pivotSpread.bind(notes)
notes = sampleSpreader(duties.rows, { x: 0, y: 1, z: 2, filter: x => !isNaN(x) })
notes |> deco |> says.spread
const sampleRecorder = pivotRecord.bind(notes)
notes = sampleRecorder(dutiesBeta.rows, { x: 0, y: 1, z: 2, filter: x => !isNaN(x) })
notes |> deco |> says.record

const accu = new Pivot(duties.rows)
  .pivot({
    row: 0,
    col: 1,
    cell: 2,
    mode: SUM,
    filter: x => !isNaN(x)
  })
accu |> delogger
accu|> decoCrostab |> logger

const isomp = new Pivot(duties.rows)
  .pivot({
    row: 0,
    col: 1,
    cell: { 2: 'sum', 3: 'sum', 4: 'count', },
    filter: x => !isNaN(x)
  })

isomp|> decoCrostab |> logger

