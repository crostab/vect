import { deco }             from '@spare/deco'
import { says }             from '@spare/logger'
import { indexed }          from '@vect/object-mapper'
import { fitRoll, rollTop } from '../index'

/**
 * Roll vec[i]
 * pt <= i
 */
export function rollLo(i, lo) {
  const el = this[i]
  const prev = this.slice(), ind = i
  while (lo < i) this[i] = this[--i] // roll to lower index by moving previous element higher up
  this[lo] = el;
  `>> rollTop(${prev |> deco}, ${ind}, ${lo}) -> ${this |> deco}` |> console.log
}

const candidates = {
  // foo: [ '-', 'a', 'b', 'c', 'd', 'e', 'f', 'g' ],
  bar: [ 0, 1, 2, 3, 4, 5, 6, 7 ]
}

export function rollTop2(vec, inds) {
  for (let ceiling = inds.length - 1, incre = 0, prevIndex = 0, maxIndex = 0; ceiling >= 0; ceiling--) {
    let currIndex = inds[ceiling]
    if (currIndex < maxIndex) { // ascending
      // `>> [currIndex] (${currIndex}) [prevIndex] (${prevIndex}) [currIndex < prevIndex] (${currIndex < prevIndex})` |> console.log;
      `>> [currIndex] (${currIndex}) [maxIndex] (${maxIndex}) [currIndex < maxIndex] (${currIndex < maxIndex})` |> console.log
      currIndex += incre
    }
    // if (ind >= hi)
    {
      const slice = vec.slice()
      rollLo.call(slice, currIndex, 0);
      `>> rollTop(${vec |> deco}, ${currIndex}, 0) -> ${slice |> deco}` |> console.log
    }
    rollLo.call(vec, currIndex, 0)
    // incre++

    prevIndex = currIndex
    if (currIndex > maxIndex) maxIndex = currIndex
    incre++
  }
  return vec
}

export function rollTop3(vec, inds) {
  let max = 0
  let pos = 0
  let inc = 0
  for (let ind of inds) {
    if (ind > max) {
      max = ind
      ++inc
    }
    if (ind < max) {
      if (ind + inc > pos) rollLo.call(vec, ind + inc, pos)
    }
    else {
      if (ind > pos) rollLo.call(vec, ind, pos)
    }
    pos++
  }
  return vec
}

const indexesCollection = [
  [ 2, 0, 1, 5 ],
  [ 0, 7, 1, 2 ],
  [ 6, 2, 4, 3 ],
  [ 4, -1, 2, 0 ]
]


for (let [ key, vec ] of indexed(candidates)) {
  for (let inds of indexesCollection) {
    const rollable = fitRoll(inds.slice())
    rollTop(vec.slice(), rollable) |> deco |> says[key].br(inds).p('->').br(rollable)
    console.log()
  }
}