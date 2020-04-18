import { FUN, OBJ }                       from '@typen/enum-data-types'
import { init as initMatrix }             from '@vect/matrix-init'
import { mapper as matrixMapper }         from '@vect/matrix-mapper'
import { init as initVector }             from '@vect/vector-init'
import { mapper, mutate as vectorMutate } from '@vect/vector-mapper'
import { select }                         from '@vect/vector-select'
import { zipper }                         from '@vect/vector-zipper'
import { ACCUM, COUNT, INCRE, SUM }       from '../resources/PivotModes'
import { Nullifier, pivotMode }           from './PivotUtils'

let s, b, m

const ADD = 'add', PILE = 'pile', LOC = 'Loc', AMP = 'Amp', ISOMORPH = 'isomorph'

export class Pivot {

  constructor (raw, mode = ACCUM) {
    /**
     * @field {*[][]} raw
     * @field {*[]} s
     * @field {*[]} b
     * @field {*[][]} m
     * @field {function():(Array|number)} n
     */
    this.rows = raw
    this.reboot(mode)
  }

  reboot () {
    this.s = []
    this.b = []
    this.m = []
  }

  clearMatrix (mode) {
    this.m = initMatrix(this.s?.length, this.b?.length, Nullifier(mode))
  }

  get ht () {return this.s.length }
  get wd () {return this.b.length }
  x (x) { return this.s.indexOf(x) }
  y (y) { return this.b.indexOf(y) }

  /**
   * Expand the side, 's' and the matrix, 'm'.
   * @param {*} x
   * @param {function():[]|function():number} nf
   * @returns {number}
   * @private
   */
  newrow (x, nf) {
    return this.m.push(initVector(this.wd, nf)), this.s.push(x)
  }

  /**
   * Expand the banner, 'b' and the matrix, 'm'.
   * @param {*} y
   * @param {function():[]|function():number} nf
   * @returns {number}
   * @private
   */
  newcol (y, nf) {
    return mapper(this.m, row => row.push(nf()), this.ht), this.b.push(y)
  }

  rowAmp (x, nf) {
    let i
    return (i = this.s.indexOf(x)) < 0 ? (i + this.newrow(x, nf)) : i
  }

  colAmp (y, nf) {
    let j
    return (j = this.b.indexOf(y)) < 0 ? (j + this.newcol(y, nf)) : j
  }

  amp (x, y, nf) {
    this.rowAmp(x, nf)
    this.colAmp(y, nf)
  }

  addLoc (x, y, v) {
    this.m[this.x(x)][this.y(y)] += v
  }

  pileLoc (x, y, v) {
    this.m[this.x(x)][this.y(y)].push(v)
  }

  addAmp (x, y, v, nf) {
    this.m[this.rowAmp(x, nf)][this.colAmp(y, nf)] += v
  }

  pileAmp (x, y, v, nf) {
    this.m[this.rowAmp(x, nf)][this.colAmp(y, nf)].push(v)
  }

  isomorphLoc ([x, y], vs, modes, hi) {
    const vec = this.m[this.x(x)][this.y(y)]
    zipper(vs, modes, (value, mode, i) => {
      if (mode === INCRE) return vec[i] += value
      if (mode === ACCUM) return vec[i].push(value)
      if (mode === COUNT) return vec[i]++
    })
  }

  isomorphAmp ([x, y], vs, modes, hi, nf) {
    const vec = this.m[this.rowAmp(x, nf)][this.colAmp(y, nf)]
    zipper(vs, modes, (value, mode, i) => {
      if (mode === SUM) return vec[i] += value
      if (mode === ACCUM) return vec[i].push(value)
      if (mode === COUNT) return vec[i]++
    })
  }

  accumLauncher (mode = ACCUM, boot = true, filter) {
    let fn
    const accum = this[(!mode ? PILE : ADD) + (boot ? AMP : LOC)].bind(this)
    const nf = boot ? Nullifier(mode) : undefined
    if (typeof filter === FUN) {
      fn = (mode === COUNT)
        ? ([x, y, v]) => {filter(v) ? accum(x, y, 1, nf) : this.amp(x, y, nf)}
        : ([x, y, v]) => {filter(v) ? accum(x, y, v, nf) : this.amp(x, y, nf)}
    }
    else {
      fn = (mode === COUNT)
        ? ([x, y,]) => accum(x, y, 1, nf)
        : ([x, y, v]) => accum(x, y, v, nf)
    }
    return (row, indexes) => fn(select(row, indexes, 3))
  }

  isomorphLauncher (modes, boot = true) {
    let nf
    const hi = modes.length
    if (boot) {
      const nfs = mapper(modes, mode => Nullifier(mode), hi)
      nf = () => mapper(nfs, fn => fn(), hi)
    }
    const accums = this[ISOMORPH + (boot ? AMP : LOC)].bind(this)
    return (row, [x, y], vs) => accums(
      select(row, [x, y], 2),
      select(row, vs, hi),
      modes, hi, nf
    )
  }

  pivot ({ row, col, cell, mode = ACCUM, boot = true, filter } = {}) {
    if (typeof cell === OBJ) return this.bandPivot({ row, col, cell, boot, filter })
    boot ? this.reboot() : this.clearMatrix(mode)
    const
      { rows, s, b, m } = this,
      accum = this.accumLauncher(mode, boot, filter)
    for (let i = 0, { length } = rows; i < length; i++)
      accum(rows[i], [row, col, cell])
    return { side: s, banner: b, matrix: m }
  }

  /**
   *
   * @param {number} row
   * @param {number} col
   * @param {Object} cell - Object of [fieldIndex, stat]
   * @param {boolean} [boot]
   * @param {function} [filter]
   * @returns {{side: *, banner: *, matrix: *}}
   */
  bandPivot ({ row, col, cell, boot = true, filter } = {}) {
    let x = row, y = col, cells = Object.entries(cell), hi = cells.length
    if (boot) { this.reboot() }
    else {this.clearMatrix(mode)}
    const vs = Array(hi), modes = Array(hi), stats = []
    for (let i = 0, stat, mode; i < hi; i++) {
      ([vs[i], stat] = cells[i])
      if ((mode = pivotMode(stat)) === ACCUM) stats.push([i, stat])
      modes[i] = mode
    }
    const { rows } = this, accumVec = this.isomorphLauncher(modes, boot), hiSQ = stats.length
    for (let i = 0, l = rows.length; i < l; i++) accumVec(rows[i], [x, y], vs)
    if (hiSQ) {
      this.m = matrixMapper(this.m, vec =>
        vectorMutate(stats, ([i, stat]) => stat(vec[i]), hiSQ)
      )
    }
    return { side: this.s, banner: this.b, matrix: this.m }
  }
}
