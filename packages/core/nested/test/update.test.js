import { appendCell, assignCell, updateCell } from '../src/update.js'

const nested = {}

updateCell.call(nested, '1', 'a', 100)
appendCell.call(nested, '2', 'b', 100)
assignCell.call(nested, '3', 'c', 'val', 100)

console.table(nested)