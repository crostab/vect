import { FobaStr } from '@foba/object'
import { says } from '@spare/logger'
import { deco } from '@spare/deco'
import { selectValues } from '../src/selectValues'

FobaStr.Pastas |> deco |> says.original

const selection = ['lasagna', 'ravioli', 'biangbiang', 'spaghetti']

selection |>  says.selected
selectValues(FobaStr.Pastas, selection)|> deco  |> says.selected

