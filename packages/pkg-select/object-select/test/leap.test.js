import { leap } from '../src/leap'
import { delogger } from '@spare/deco'

const o = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5
}

leap(o,2,11) |> delogger
