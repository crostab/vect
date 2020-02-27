export const reviter = function (vec, fn, l) {
  l = l || vec && vec.length
  for (--l; l >= 0; l--)
    fn.call(this, vec[l], l)
}
