import { delogger }                  from '@spare/deco'
import { decoCrostab, logger, says } from '@spare/logger'
import { strategies } from '@valjoux/strategies'
import { Pivot }      from '../../function/Pivot'
import { SUM }        from '../../resources/PivotModes'

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

const result = new Pivot(duties).pivot([0, 1, 2], { mode: SUM, include: x => !isNaN(x) })
result|> delogger

export class PivotTest {
  static testMulti () {
    const candidates = {
      duties: [duties, ['day', 'name'], [['served', 'sum'], ['sold', 'sum']], { include: x => !isNaN(x) }]
    }
    const { lapse, result } = strategies({
      repeat: 1E+4,
      candidates,
      methods: {
        stable: (rows, xy, cells, config) => new Pivot(rows).bandPivot(xy, cells, config)
      }
    })
    lapse |> decoCrostab |> says.lapse
    result |> decoCrostab |> says.result

    'stable' |> logger
    for (let key of Object.keys(candidates)) {
      key |> logger
      result.queryCell(key, 'stable') |> delogger
      result.queryCell(key, 'stable') |> decoCrostab |> logger
      '' |> logger
    }

  }

  static test () {
    const candidates = {
      duties: [duties, ['day', 'name', 'served'], { mode: SUM, include: x => !isNaN(x) }]
    }
    const { lapse, result } = strategies({
      repeat: 1E+4,
      candidates,
      methods: {
        stable: (rows, fields, modes) => new Pivot(rows).pivot(fields, modes)
      }
    })
    lapse |> decoCrostab |> says.lapse
    result |> decoCrostab |> says.result

    'stable' |> logger
    for (let key of Object.keys(candidates)) {
      key |> logger
      result.queryCell(key, 'stable') |> decoCrostab |> logger
      '' |> logger
    }

  }
}

PivotTest.test()

