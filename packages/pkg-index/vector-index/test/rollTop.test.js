import { deco }    from '@spare/deco'
import { says }    from '@spare/logger'
import { rollTop } from '../index'
import { indexed } from '@vect/object-mapper'


const candidates = {
  foo: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ],
  bar: [ 1, 2, 3, 4, 5, 6, 7 ]
}

for (let [ key, vec ] of indexed(candidates)) {
  rollTop(vec.slice(), [ 0, 2, 4 ]) |> deco |> says[key]
}

for (let [ key, vec ] of indexed(candidates)) {
  rollTop(vec.slice(), [ 1, 3, 5 ]) |> deco |> says[key]
}

for (let [ key, vec ] of indexed(candidates)) {
  rollTop(vec.slice(), [ 4, 5, 6 ]) |> deco |> says[key]
}
