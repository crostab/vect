export const iterate = function (mx, y, fn, l) {
  l = l || mx && mx.length
  for (let i = 0; i < l; i++)
    fn.call(this, mx[i][y], i)
}


