import { Roller } from '../src/roller'

for (const value of Roller.build([0, 1, 2, 3, 4], 4)) {
  console.log(value) // 0, 1, 2
}
