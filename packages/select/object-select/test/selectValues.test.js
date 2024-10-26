import { ObjectCollection } from '@foba/object-string'
import { says }             from '@spare/logger'
import { deco }             from '@spare/deco'
import { selectValues }     from '../src/select'

ObjectCollection.Pastas |> deco |> says.original

const selection = ['lasagna', 'ravioli', 'biangbiang', 'spaghetti']

selection |>  says.selected
selectValues(ObjectCollection.Pastas, selection)|> deco  |> says.selected

