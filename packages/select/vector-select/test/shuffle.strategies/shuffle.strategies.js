import { strategies } from '@valjoux/strategies'
import { decoCrostab, says } from '@spare/logger'
import { Foba } from '@foba/vector-number'
import { shuffle as fisherYates } from '../../src/shuffle.js'
import { shuffle } from '../../utils/Shuffler.js'

const { lapse, result } = strategies({
  repeat: 1E+6,
  candidates: {
    simple: [Foba.range(5)],
    misc: [Foba.primes(5), 3],
  },
  methods: {
    bench: arr => arr.map(x => x),
    classic: shuffle,
    fisherYates: fisherYates,
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
