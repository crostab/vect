import { SimpleEntriesCollection } from '@foba/foo'
import { logger, logNeL, deco, xr } from '@spare/logger'
import { zipper } from '../src/zipper'
import { mutazip } from '../src/mutazip'

export function entriesZipperTest () {
  for (let [k, entries] of Object.entries(SimpleEntriesCollection)) {
    xr(k)
      .original(entries|> deco)
      .zipper(zipper(entries, entries, (x, y, i) => `[${i}] (${x})`, (x) => `\'${x}\'`) |> deco)|> logger
  }
  SimpleEntriesCollection |> deco |> logNeL
  for (let [k, entries] of Object.entries(SimpleEntriesCollection)) {
    xr(k)
      .original(entries|> deco)
      .zipper(mutazip(entries, entries, (x, y, i) => `[${i}] (${x})`, (x) => `\'${x}\'`) |> deco)|> logger
  }
  SimpleEntriesCollection |> deco |> logNeL
}

entriesZipperTest()
