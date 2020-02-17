//稀疏数组
import { logger } from '@spare/logger'
import { xr } from '@spare/xr'

const array = new Array(3)
array[2] = 'name'

for (let a in array) {
  xr().index(a).value(array[a]) |> logger
}
'' |> logger

// 密集数组
const dense = Array.apply(null, Array(3))
dense[2] = 'name'
for (let a in dense) {
  xr().index(a).value(array[a]) |> logger
}
