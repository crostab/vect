import { makeEmbedded }      from '@foba/util'
import { decoCrostab, says } from '@spare/logger'
import { strategies }        from '@valjoux/strategies'
import { iterateEntries }    from '@vect/object-mapper'

export const iterate = (nested, onVXY) => {
  for (let x in nested) {
    const temp = nested[x]
    for (let y in temp) {
      onVXY(temp[y], x, y)
    }
  }
}

export const iterateKeys = (nested, onXY) => {
  for (let x in nested) {
    for (let y in nested[x]) {
      onXY(x, y)
    }
  }
}

export const iterateValues = (nested, onV) => {
  for (let x in nested) {
    const temp = nested[x]
    for (let y in temp) {
      onV(temp[y])
    }
  }
}

export const iterateXYV = (nested, onXYV) => {
  iterateEntries(nested, ([ x, yToV ]) => {
    iterateEntries(yToV, ([ y, v ]) => {
      onXYV(x, y, v)
    })
  })
}

const FOO = {
  x: { a: 1, b: 1, c: 1 },
  y: { b: 1, c: 1, d: 1 },
  z: { c: 1, d: 1, e: 1 }
}
const BAR = {
  r1: { a: 1, b: 1, c: 1 },
  r2: { b: 1, c: 1, d: 1 },
  r3: { c: 1, d: 1, e: 1 },
  r4: { a: 1, b: 1, c: 1 },
  r5: { b: 1, c: 1, d: 1 },
  r6: { c: 1, d: 1, e: 1 },
  r7: { a: 1, b: 1, c: 1 },
  r8: { b: 1, c: 1, d: 1 },
  r9: { c: 1, d: 1, e: 1 },
}
const { lapse, result } = strategies({
  repeat: 1E+5,
  candidates: {
    foo: FOO,
    bar: BAR
  } |> makeEmbedded,
  methods: {
    bench: x => x,
    iter: x => iterate(x, () => {}),
    iterKey: x => iterateKeys(x, () => {}),
    iterVal: x => iterateValues(x, () => {}),
    iterXYV: x => iterateXYV(x, () => {}),
    // fut: x => iterate(x, () => {}),
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']