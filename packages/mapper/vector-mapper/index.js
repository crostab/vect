function mapper(vec, fn, l) {
  l = l || vec?.length;
  const ve = Array(l);
  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l);
  return ve
}

function iterate(vec, fn, l) {
  l = l || vec?.length;
  for (let i = 0; i < l; i++)
    fn.call(this, vec[i], i);
}

function mutate(vec, fn, l) {
  l = l || vec?.length;
  for (--l; l >= 0; l--) vec[l] = fn.call(this, vec[l], l);
  return vec
}

function reviter(vec, fn, l) {
  l = l || vec?.length;
  for (--l; l >= 0; l--)
    fn.call(this, vec[l], l);
}

function* indexedOf(vec) {
  // for (let i = 0, h = vec?.length; i < h; i++) yield vec[i]
  yield* vec;
}

function* indexedBy(vec, by) {
  for (let i = 0, h = vec?.length, el; i < h; i++)
    if (by(el = vec[i], i)) yield el;
}

function* indexedTo(vec, to) {
  if (!to) { return yield* indexedOf(vec) }
  for (let i = 0, h = vec?.length; i < h; i++)
    yield to(vec[i], i);
}

function* indexed(vec, by, to) {
  if (!to) { return yield* (!by ? indexedOf(vec) : indexedBy(vec, by)) }
  for (let i = 0, h = vec?.length, el; i < h; i++)
    if (by(el = vec[i], i)) yield to(el, i);
}

export { indexed, indexedBy, indexedOf, indexedTo, iterate, mapper, mutate, reviter };
