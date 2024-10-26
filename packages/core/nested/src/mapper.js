export const iterate = (nested, onVXY) => {
  let inner
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      onVXY(inner[y], x, y)
    }
  }
}

export const iterateXY = (nested, onXY) => {
  let inner
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      onXY(x, y)
    }
  }
}

export const iterateY = (nested, onY) => {
  let inner
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      onY(y)
    }
  }
}

export const indexedIterate = (nested, onXYV) => {
  let inner
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      onXYV(x, y, inner[y])
    }
  }
}

export const indexedMutate = (nested, fnXYV) => {
  let inner
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      inner[y] = fnXYV(x, y, inner[y])
    }
  }
  return nested
}



