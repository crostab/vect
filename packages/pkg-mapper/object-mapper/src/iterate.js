export function iterate(o, fn) {
  for (let k in o) fn.call(this, o[k])
}

