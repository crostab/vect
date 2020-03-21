import { delogger } from '@spare/deco'
import { rename } from '../src/rename'

const func = x => x

func.name |> delogger
rename(func, 'bye-bye')
func.name |> delogger
