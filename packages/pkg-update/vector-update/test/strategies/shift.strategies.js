import { makeEmbedded }              from '@foba/util'
import { decoCrostab, logger, says } from '@spare/logger'
import { strategies }                from '@valjoux/strategies'
import { dateTime }                  from '@valjoux/timestamp-pretty'

const createSet = (n, fn) => {
  const set = new Set()
  for (let i = 0; i < n; i++) set.add(fn(i))
  return set
}
const shiftFromSet = (set) => {
  for (let x of set) {
    set.delete(x)
    return x
  }
}
const test = () => {
  const { lapse, result } = strategies({
    repeat: 1E+6,
    candidates: {
      alpha: [1, 2, 3, 4, 5, 6],
      // beta: 8,
      // gamma: 16
    } |> makeEmbedded,
    methods: {
      initArr: vec => { return vec.slice().length },
      initSet: vec => { return new Set(vec).size },
      removeFromArr: vec => {
        vec = vec.slice()
        while (vec.length > 1) { vec.splice(vec.indexOf(vec[1]), 1) }
        return vec.length
      },
      removeFromSet: vec => {
        const set = new Set(vec)
        let i = set.size
        while (--i >= 1) { set.delete(i) }
        return set.size
      },
      shiftFromArr: vec => {
        vec = vec.slice()
        while (vec.length > 1) { vec.shift() }
        return vec.length
      },
      shiftFromSet: vec => {
        const set = new Set(vec)
        while (set.size > 1) { shiftFromSet(set) }
        return set.size
      }
    }
  })
  lapse |> decoCrostab |> says['lapse'].p(dateTime())
  '' |> logger
  result |> decoCrostab |> says['result'].p(dateTime())
}
test()