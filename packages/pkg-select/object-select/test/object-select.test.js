import { StringObjectCollection } from '@foba/object'
import { deco }                   from '@spare/deco'
import { says }                   from '@spare/logger'
import { select }                 from '../src/select'

const pastas = 'Pastas'
StringObjectCollection[pastas] |> deco |> says['original']

const selection = ['lasagna', 'ravioli', 'biangbiang', 'spaghetti']

selection |>  says['selected']
select(StringObjectCollection[pastas], selection)|> deco  |> says['selected']

