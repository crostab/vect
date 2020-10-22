import {columnMapper} from './ColumnMapper'

export const mapper = (mx, y, fn, l) =>
  columnMapper.call({ y }, mx, fn, l)


