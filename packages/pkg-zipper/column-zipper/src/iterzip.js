export function iterzip(ma, mb, y, action, hi) {
  hi = hi ?? ma?.length
  for (let i = 0; i < hi; i++)
    action(ma[i][y], mb[i][y], i)
  return void 0
}