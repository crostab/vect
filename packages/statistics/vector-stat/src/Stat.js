export class Stat {
  static sum(iter) {
    let sum = 0
    for (let v of iter) sum += v
    return sum
  }
  static average(iter) {
    let sum = 0, n = 0
    for (let v of iter) { sum += v, n++ }
    return sum / n
  }
  static max(iter) {
    let max = Number.NEGATIVE_INFINITY
    for (let v of iter) if (v > max) max = v
    return max
  }
  static min(iter) {
    let min = Number.POSITIVE_INFINITY
    for (let v of iter) if (v < min) min = v
    return min
  }
  static first(iter) {
    for (let v of iter) return v
  }
  static last(iter) {
    let last = null
    for (let v of iter) last = v
    return last
  }
  static length(iter) {
    let max = 0
    for (let v of iter) if ((v = v?.length) > max) max = v
    return max
  }
}



