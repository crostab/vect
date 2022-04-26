import { deco }   from '@spare/deco'
import { logger } from '@spare/logger'
import { clone }  from '../src/clone'

const object = {
  mx: [ [ 1, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ] ],
  arr: [ 1, 2, 3 ],
  obj: { x: 1, y: 2 },
  str: 'foo',
  num: 1,
  boo: true,
  und: undefined
}

const object2 = clone(object)

object |> deco |> logger
object2 |> deco |> logger

object.obj.x = 10
object2.obj.y = 20

object |> deco |> logger
object2 |> deco |> logger
