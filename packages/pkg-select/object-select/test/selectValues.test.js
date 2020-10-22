import { StringObjectCollection } from '@foba/object'
import { says }                   from '@spare/logger'
import { deco }                   from '@spare/deco'
import { selectValues }           from '../src/selectValues'

StringObjectCollection['Pastas'] |> deco |> says.original

const selection = ['lasagna', 'ravioli', 'biangbiang', 'spaghetti']

selection |>  says.selected
selectValues(StringObjectCollection['Pastas'], selection)|> deco  |> says.selected

