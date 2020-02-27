export const iterate = function (vec, fn, l) {
  l = l || vec && vec.length
  for (let i = 0; i < l; i++)
    fn.call(this, vec[i], i)
}
