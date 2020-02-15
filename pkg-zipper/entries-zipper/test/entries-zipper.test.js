import { SimpleEntries } from '@foba/foo'
import { logger, logNeL } from '@spare/logger'
import { xr } from '@spare/xr'
import { deco } from '@spare/deco'
import { zipper } from '../src/zipper'
import { mutazip } from '../src/mutazip'

export function entriesZipperTest () {
  for (let [k, entries] of Object.entries(SimpleEntries)) {
    xr(k)
      .original(entries|> deco)
      .zipper(zipper(entries, entries, (x, y, i) => `[${i}] (${x})`, (x) => `\'${x}\'`) |> deco)|> logger
  }
  SimpleEntries |> deco |> logNeL
  for (let [k, entries] of Object.entries(SimpleEntries)) {
    xr(k)
      .original(entries|> deco)
      .zipper(mutazip(entries, entries, (x, y, i) => `[${i}] (${x})`, (x) => `\'${x}\'`) |> deco)|> logger
  }
  SimpleEntries |> deco |> logNeL
}

entriesZipperTest()
