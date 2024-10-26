//稀疏数组
import { logger } from '@spare/logger'
import { xr }     from '@spare/xr'

const array = new Array(3)
array[2] = 'name'

for (let a in array) {
  logger(xr().index(a).value(array[a]))
}
logger('')

// 密集数组
const dense = Array.apply(null, Array(3))
dense[2] = 'name'
for (let a in dense) {
  logger(xr().index(a).value(array[a]))
}
