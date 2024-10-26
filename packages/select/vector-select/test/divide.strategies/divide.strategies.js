import { SimpleVectorCollection } from '@foba/foo'
import { decoCrostab, says } from '@spare/logger'
import { strategies } from '@valjoux/strategies'
import { mapper as mapperObject } from '@vect/object-mapper'
import { divide } from '../../src/divide'
import { divideEdge } from './divideEdge'
import { divideNat } from './divideNat'
import { deco } from '@spare/deco'

const spliceIndexesGenerator = function * () {
  yield [2, 3, 4]
  yield [1, 2, 3]
  yield [0, 2, 4]
  yield [5, 7, 9]
  yield [0, 5]
}

const ig = spliceIndexesGenerator()

const { lapse, result } = strategies({
  repeat: 1E+6,
  candidates: mapperObject(SimpleVectorCollection, (vector) => [vector, ig.next().value]),
  methods: {
    indexes: (ve, ins) => ins,
    nat: (ve, ins) => divideNat(ve.slice(), ins),
    edge: (ve, ins) => divideEdge(ve.slice(), ins),
    fut: (ve, ins) => divide(ve.slice(), ins),
    vector: ve => ve,
  },
  showParams: false
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']

const sideLabel = result.side[2]
const NAT = 'nat', FUT = 'fut', EDGE = 'edge'
result.cell(sideLabel, NAT) |> deco |> says[NAT]
result.cell(sideLabel, FUT) |> deco |> says[FUT]
result.cell(sideLabel, EDGE) |> deco |> says[EDGE]
