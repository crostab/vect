import { delogger } from '@spare/deco'
import { tap }      from '../src'

tap(1, 0, undefined, 3, null, 5) |> delogger
