const NAME = 'name'

export const rename = (target, name) => renamer.call({ value: name }, target)

export const Rename = (name) => renamer.bind({ value: name })

export const renamer = function (t) {
  const attributes = this
  return Object.defineProperty(t, NAME, attributes)
}

// configurable, default: false
// enumerable, default: false
// writable, default: false


