export const iterate = (nested, onVXY) => {
  let row
  if (!nested) return
  for (let x in nested) {
    if (!(row = nested[x])) continue
    for (let y in row) {
      onVXY(row[y], x, y)
    }
  }
}

export const iterateXY = (nested, onXY) => {
  let row
  if (!nested) return
  for (let x in nested) {
    if (!(row = nested[x])) continue
    for (let y in row) {
      onXY(x, y)
    }
  }
}

export const iterateY = (nested, onY) => {
  let row
  if (!nested) return
  for (let x in nested) {
    if (!(row = nested[x])) continue
    for (let y in row) {
      onY(y)
    }
  }
}

export const indexedIterate = (nested, onXYV) => {
  let row
  if (!nested) return
  for (let x in nested) {
    if (!(row = nested[x])) continue
    for (let y in row) {
      onXYV(x, y, row[y])
    }
  }
}

export const indexedMutate = (nested, fnXYV) => {
  let row
  if (!nested) return
  for (let x in nested) {
    if (!(row = nested[x])) continue
    for (let y in row) {
      row[y] = fnXYV(x, y, row[y])
    }
  }
}

export function* indexedGenerator(nested, fnXYV) {
  let row
  if (!nested) return
  for (let x in nested) {
    if (!(row = nested[x])) continue
    for (let y in row) {
      yield fnXYV(x, y, row[y])
    }
  }
}


