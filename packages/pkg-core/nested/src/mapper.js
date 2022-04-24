export const iterate = (nested, fn) => {
  let row
  if (!nested) return
  for (let x in nested) {
    if (!(row = nested[x])) continue
    for (let y in row) {
      fn(row[y], x, y)
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

export const side = (nested) => {
  return Object.keys(nested)
}

export const head = (nested) => {
  const vec = []
  iterateY(nested, y => { if (vec.indexOf(y) < 0) vec.push(y) })
  return vec
}