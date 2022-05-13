import { delogger } from '@spare/deco'
import { INCRE }    from '../resources/PivotModes'
import { Pivot }    from '../src/Pivot'

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

let pivot = new Pivot(0, 1, 2, INCRE, x => !isNaN(x))
pivot.this |> delogger
pivot.spreadPivot(duties.rows) |> delogger
pivot.recordPivot(dutiesBeta.rows) |> delogger

let pivot = new Pivot(0, 1, 2, INCRE, x => !isNaN(x))
pivot.this |> delogger
pivot.spreadPivot(duties.rows) |> delogger
pivot.recordPivot(dutiesBeta.rows) |> delogger
