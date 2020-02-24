import { FobaStr } from '@foba/object'
import { says } from '@spare/logger'
import { select } from '../src/select'
import { deco } from '@spare/deco'

FobaStr.Pastas |> deco |> says.original

const selection = ['lasagna', 'ravioli', 'biangbiang', 'spaghetti']

selection |>  says.selected
select(FobaStr.Pastas, selection)|> deco  |> says.selected

