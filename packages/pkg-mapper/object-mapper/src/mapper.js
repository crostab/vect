export function mapper(o, fn) {
  const ob = {}
  for (let k in o) ob[k] = fn.call(this, o[k])
  return ob
}

