import { delogger } from '@spare/deco'
import { lookupKeys } from '..'

const ob = {
  foo: 1,
  bar: 2,
  baz: 3
}

lookupKeys.call(ob, [['foo', 'kha'], 'bar']) |> delogger
