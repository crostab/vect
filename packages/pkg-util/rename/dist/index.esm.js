const NAME = 'name';
/**
 * @deprecated use @ject/rename instead
 */

const rename = (target, name) => renamer.call({
  value: name
}, target);
/**
 * @deprecated use @ject/rename instead
 */

const Rename = name => renamer.bind({
  value: name
});
/**
 * @deprecated use @ject/rename instead
 */

const renamer = function (t) {
  const attributes = this;
  return Object.defineProperty(t, NAME, attributes);
}; // configurable, default: false
// enumerable, default: false
// writable, default: false

export { Rename, rename };
