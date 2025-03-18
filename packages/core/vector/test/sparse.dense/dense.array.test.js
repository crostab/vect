import { decoCrostab } from '@spare/logger'
import { strategies }  from '@valjoux/strategies'

const { lapse, result } = strategies({
  repeat: 1E+5,
  candidates: {
    l0: [0],
    l1: [1],
    l8: [8],
    l127: [127],
    l512: [512],
  },
  methods: {
    stable: l => new Array(l),
    dev: l => new Array(l).fill(undefined),
    edge: l => Array.apply(null, Array(l)),
    fut: l => Array.apply(null, { length: l }),
  }
})
console.log('lapse')
console.log(decoCrostab(lapse))
console.log('')
console.log('result')
console.log(decoCrostab(result))
