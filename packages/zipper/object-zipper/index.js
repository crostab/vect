const iterzip = (oba, obb, proc) => {
  for (let k in oba)
    proc(oba[k], obb[k])
  return void 0
}

const mutazip = (oba, obb, pair) => {
  for (let k in oba)
    oba[k] = pair(oba[k], obb[k])
  return oba
}

const zip = (oba, obb, pair) => {
  const zip = {}
  for (let k in oba) zip[k] = pair(oba[k], obb[k])
  return zip
}

export { iterzip, mutazip, zip, zip as zipper }
