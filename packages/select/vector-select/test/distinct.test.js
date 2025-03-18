import { test }                                         from 'node:test'
import { distinct, distinctBy, distinctOf, distinctTo } from '../src/distinct.js'

const list = [
  1,
  2, 2, 2,
  3, 3, 3, 3,
  4, 4, 4, 4, 4,
  5, 5, 5, 5, 5, 5,
  6, 6, 6, 6, 6,
  7, 7, 7, 7,
  8, 8, 8,
  9, 9,
  10,
]

test('distinct', () => {
  console.log(distinctOf(list))
  console.log(distinctBy(list, x => x % 3 === 0))
  console.log(distinctTo(list, x => x % 3))
  console.log(distinct(list, x => x % 3 === 0, x => x * 2))
})