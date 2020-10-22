export const unwind = (entries, h) => {
  h = h || entries?.length
  let keys = Array(h), values = Array(h)
  for (let r; --h >= 0 && (r = entries[h]);) {
    keys[h] = r[0]
    values[h] = r[1]
  }
  return [keys, values]
}
