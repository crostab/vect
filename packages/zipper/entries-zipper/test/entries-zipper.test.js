import { SimpleEntriesCollection }  from '@foba/foo'
import { deco, logger, logNeL, xr } from '@spare/logger'
import { mutazip }                  from '../src/mutazip.js'
import { zipper }                   from '../src/zipper.js'

export function entriesZipperTest() {
  for (let [ k, entries ] of Object.entries(SimpleEntriesCollection)) {
    xr(k)
      .original(entries|> deco)
      .zipper(zipper(entries, entries, (x, y, i) => `[${ i }] (${ x })`, (x) => `\'${ x }\'`) |> deco)|> logger
  }
  SimpleEntriesCollection |> deco |> logNeL
  for (let [ k, entries ] of Object.entries(SimpleEntriesCollection)) {
    xr(k)
      .original(entries|> deco)
      .zipper(mutazip(entries, entries, (x, y, i) => `[${ i }] (${ x })`, (x) => `\'${ x }\'`) |> deco)|> logger
  }
  SimpleEntriesCollection |> deco |> logNeL
}

entriesZipperTest()
