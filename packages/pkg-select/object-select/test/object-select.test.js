import { StringObjectCollection } from '@foba/object'
import { deco }                   from '@spare/deco'
import { says }                   from '@spare/logger'
import { selectObject }           from '../src/selectObject'
import { select }                 from '../src/selectObject'

const pastas = 'Pastas'
StringObjectCollection[pastas] |> deco |> says['original']

const selection = ['lasagna', 'ravioli', 'biangbiang', 'spaghetti']

selection |>  says['selected']
selectObject(StringObjectCollection[pastas], selection)|> deco  |> says['selected']

selection |>  says['selected call']
select.call({ keys: selection }, StringObjectCollection[pastas])|> deco  |> says['selected call']

