const NAME = 'name'

/**
 * @deprecated use @ject/rename instead
 */
export const rename = (target, name) => renamer.call({ value: name }, target)

/**
 * @deprecated use @ject/rename instead
 */
export const Rename = (name) => renamer.bind({ value: name })

/**
 * @deprecated use @ject/rename instead
 */
export const renamer = function (t) {
  const attributes = this
  return Object.defineProperty(t, NAME, attributes)
}

// configurable, default: false
// enumerable, default: false
// writable, default: false


