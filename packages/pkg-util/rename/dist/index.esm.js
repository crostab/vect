const NAME = 'name';
const rename = (target, name) => renamer.call({
  value: name
}, target);
const Rename = name => renamer.bind({
  value: name
});
const renamer = function (t) {
  const attributes = this;
  return Object.defineProperty(t, NAME, attributes);
}; // configurable, default: false
// enumerable, default: false
// writable, default: false

export { Rename, rename };
