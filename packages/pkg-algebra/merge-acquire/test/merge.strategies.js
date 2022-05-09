import { strategies } from '@valjoux/strategies'
import { decoCrostab, says } from '@spare/logger'
import { candidates } from './candidates'

const bindedMerge = Function.prototype.call.bind(Array.prototype.concat)

export const merge = (va, vb) => {
  return Array.prototype.concat.call(va, vb)
}

export const merges = (...vectors) => {
  return Array.prototype.concat.apply([], vectors)
}

const { lapse, result } = strategies({
  repeat: 5E+5,
  candidates,
  methods: {
    bench: x => x,
    nativeConcat: (x, y) => x.slice().concat(y),
    bindedMerge,
    merge,
    merges,
  },
  showParams: false
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
