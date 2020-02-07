import { dpArr } from './utils/clone/clone'
import { Num, NumLoose } from 'typen'
import { Ar } from './Ar'

const { numeric: num } = Num, { numeric: numLoose } = NumLoose, { map: mapAr } = Ar

/**
 *
 * @param {number} height
 * @param {number} width
 * @param {function} ject
 * @returns {number[][]}
 */
export function ini (height, width, ject) {
  return Array(height).fill(null).map((_, x) =>
    Array(width).fill(null).map((_, y) =>
      ject(x, y)
    )
  )
}

export function size (mx) {
  const l = mx?.length
  return [l, l ? mx[0]?.length : undefined]
}

export function copy (mx) {
  return mx.map(row => row.slice())
}

export function clone (mx) {
  return mx.map(dpArr)
}

/**
 *
 * @param {*[][]} mx
 * @param {boolean=false} [loose]
 * @returns {*}
 */
export function numeric (mx, { loose = false }) {
  const fn = loose ? numLoose : num
  return mx.map(r => r.map(fn))
}

/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */
export function columnIndexes (mx) {
  return !mx || !mx.length
    ? []
    : !mx[0]
      ? []
      : mx[0].map((_, i) => i)
}

/**
 *
 * @param {*[][]} mx
 * @param {number[]} indexes
 * @returns {*}
 */
export function select (mx, indexes) {
  const hi = indexes.length
  switch (hi) {
    case 0:
      return mx
    case 1:
      const [i] = indexes
      return Mx.column(mx, i)
    default:
      const { select } = Ar
      return mx.map(row => select(row, indexes, hi))
  }
}

export function column (mx, y) {
  return mx.map(r => r[y])
}

/**
 * Iterate through the columns of a 2d-array and return the transposed
 * @param {*[][]} mx
 * @param {function(*[]):*} fnOnColumn
 * @returns {*[][]|*[]}
 */
export function columns (mx, fnOnColumn) {
  return fnOnColumn
    ? mapAr(Mx.transpose(mx), fnOnColumn)
    : Mx.transpose(mx)
}

/**
 * Iterate through elements on each (x of rows,y of columns) coordinate of a 2d-array.
 * @param {*[][]} mx
 * @param {function} fn
 * @returns {*[]}
 */
export function map (mx, fn) {
  const [ht, wd] = Mx.size(mx)
  // return mx.map((r, i) => r.map((el, j) => fn(el, i, j)))
  return mapAr(mx,
    (r, i) => mapAr(r,
      (x, j) => fn(x, i, j),
      wd),
    ht)
}

export function mutateMap (mx, fn) {
  const [ht, wd] = Mx.size(mx)
  for (let i = 0, j, r; i < ht; i++) {
    r = mx[i]
    for (j = 0; j < wd; j++) {
      r[j] = fn(r[j], i, j)
    }
  }
  return mx
}

export function mapCol (mx, y, fn) {
  const l = mx.length, _mx = Array(l)
  for (let i = 0, r, l = mx.length; i < l; i++) {
    r = mx[i].slice()
    r[y] = fn(r[y], i)
    _mx[i] = r
  }
  return _mx
}

export function mutateCol (mx, y, fn) {
  for (let i = 0, r, l = mx.length; i < l; i++) {
    r = mx[i]
    r[y] = fn(r[y], i)
  }
  return mx
}

/**
 * Iterate through the columns of a 2d-array.
 * @param {*[][]} mx
 * @param {function(*[]):[]} fnOnColumn
 * @returns {*[][]}
 */
export function mapColumns (mx, fnOnColumn) {
  return Mx.columns(mx, fnOnColumn) |> Mx.transpose
}

export function spliceCols (mx, ys) {
  const hi = ys.length
  switch (hi) {
    case 0:
      return mx
    case 1:
      const [y] = ys
      return mx.map(row => {
        row.splice(y, 1)
        return row
      })
    default:
      const { splices } = Ar
      return mx.map(row => splices(row, ys, hi))
  }
}

/**
 *
 * @param {*[][][]} matrices - a list of 2d-array
 * @param {function(*[]):*} [zipper]
 */
export function zip (matrices, zipper) {
  const hi = matrices?.length, [ht, wd] = Mx.size(matrices[0])
  return typeof zipper !== 'function'
    ? Mx.ini(ht, wd, (i, j) => mapAr(matrices, mx => mx[i][j], hi))
    : Mx.ini(ht, wd, (i, j) => zipper(mapAr(matrices, mx => mx[i][j], hi)))
}

