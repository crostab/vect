import { SimpleEntriesCollection } from '@foba/foo'
import { logger, logNeL }          from '@spare/logger'
import { xr }                      from '@spare/xr'
import { deco }                    from '@spare/deco'
import { mapper }                  from '../src/mapper.js'
import { mutate }                  from '../src/mutate.js'

export function entriesMapperTest() {
  for (let [k, entries] of Object.entries(SimpleEntriesCollection)) {
    xr(k)
      .original(entries|> deco)
      .mapper(mapper(entries, (x, i) => `[${i}] (${x})`, (x) => `\'${x}\'`) |> deco)|> logger
  }
  SimpleEntriesCollection |> deco |> logNeL
  for (let [k, entries] of Object.entries(SimpleEntriesCollection)) {
    xr(k)
      .original(entries|> deco)
      .mapper(mutate(entries, (x, i) => `[${i}] (${x})`, (x) => `\'${x}\'`) |> deco)|> logger
  }
  SimpleEntriesCollection |> deco |> logNeL
}

entriesMapperTest()
