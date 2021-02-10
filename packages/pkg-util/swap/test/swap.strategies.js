import { decoCrostab, says } from '@spare/logger'
import { strategies }        from '@valjoux/strategies'

const swapInternal = function (i, j) {
  const temp = this[i]
  this[i] = this[j]
  return this[j] = temp
}

const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}
const arrays = {
  get alphabetic () {return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']},
  get numeric () {return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
}

const positions = {
  l2r8: [2, 8],
  l0r9: [0, 9]
}

const swapBySplice = function (l, r) {
  const arr = this
  this.splice(l, 0, this[r])
  this.splice(r + 1, 1)
  return arr
}
const { lapse, result } = strategies({
  repeat: 5E+6,
  candidates: positions,
  methods: {
    bench: x => x,
    dev: swapInternal.bind(arrays.alphabetic),
    edge: (l, r) => swap(arrays.alphabetic, l, r),
    fut: swap.bind(null, arrays.alphabetic),
    splice: swapBySplice.bind(arrays.alphabetic)
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
