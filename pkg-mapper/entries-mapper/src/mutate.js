export const mutate = (ents, keyFn, valFn, l) => {
  l = l || ents && ents.length
  for (let r; --l >= 0 && (r = ents[l]);) {
    r[0] = keyFn(r[0], l)
    r[1] = valFn(r[1], l)
  }
  return ents
}
