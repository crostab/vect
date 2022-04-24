export const iteratenested2 = (nested, fn) => {
  iteratenested(nested, ([ x, yToV ]) => {
    iteratenested(yToV, ([ y, v ]) => {
      fn(x, y, v)
    })
  })
}

export const iteratenested = (nested, fn) => {
  for (let x in nested) {
    const temp = nested[x]
    for (let y in temp) {
      action(temp[y])
    }
  }
}

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