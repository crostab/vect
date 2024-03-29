export function iterateKeys(o, fn) {
  for (let k in o) fn.call(this, k)
}

export function iterateValues(o, fn) {
  for (let k in o) fn.call(this, o[k])
}

export function iterateEntries(o, fn, l) {
  const entries = Object.entries(o)
  l = l ?? entries.length
  for (let i = 0; i < l; i++) fn.call(this, entries[i], i)
}

