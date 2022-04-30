export function mapValues(o, valToVal) {
  const t = {}
  for (let k in o) {
    t[k] = valToVal.call(this, o[k])
  }
  return t
}

export function mapKeys(o, keyToKey) {
  const t = {}
  for (let k in o) {
    const k2 = keyToKey.call(this, k)
    t[k2] = o[k]
  }
  return t
}

export function mapEntries(o, entToEnt) {
  const t = {}
  let i = 0
  for (let k in o) {
    const [ k2, v2 ] = entToEnt.call(this, [ k, o[k] ], i++)
    t[k2] = v2
  }
  return t
}

export function mapKeyToValue(o, keyToVal) {
  const t = {}
  for (let k in o) {
    t[k] = keyToVal.call(this, k)
  }
  return t
}




