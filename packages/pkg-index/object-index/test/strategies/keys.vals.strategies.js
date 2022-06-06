import { strategies }       from '@valjoux/strategies'
import { makeEmbedded }     from '@foba/util'
import { decoCrostab }      from '@spare/logger'
import { says }             from '@spare/xr'
import { ObjectCollection } from '@foba/object-string'
import { ents, keys, vals } from '../../index'

const { lapse, result } = strategies({
  repeat: 1E+5,
  candidates: {
    foo: ObjectCollection.CarPlants,
    bar: ObjectCollection.FilmDirectors
  } |> makeEmbedded,
  methods: {
    bench: x => x,
    cla_k: Object.keys,
    cla_v: Object.values,
    cla_e: Object.entries,
    fut_k: keys,
    fut_v: vals,
    fut_e: ents,
  }
})
lapse |> decoCrostab |> says['lapse']
// result |> decoCrostab |> says['result']