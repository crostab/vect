import { SimpleEntriesCollection } from '@foba/foo'
import { logger, logNeL } from '@spare/logger'
import { deco }   from '@spare/deco'
import { unwind } from '../index'
import { xr }     from '@spare/xr'

export class EntriesUnwindTest {
  static test () {
    for (let [k, entries] of Object.entries(SimpleEntriesCollection)) {
      xr(k).original(entries |> deco)  |> logger
      xr(k).unwind(entries |> unwind |> deco)|> logNeL
    }
  }
}

EntriesUnwindTest.test()
