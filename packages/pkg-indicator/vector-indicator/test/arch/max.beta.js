import { iterate } from '@vect/vector-mapper'

export const indicator = function (vec, l, data) {
  const { bd, fn, fm } = this
  data = data || (bd ? bd(vec) : null)
  iterate.call(data, vec, fn, l)
  return fm ? fm(data) : data
}

export const indicatorBy = (vec, thisArg, dealer, formatter, l) => indicator.call({
    bd: null,
    fn: dealer,
    fm: formatter
  },
  vec, l, thisArg)

export const Indicator = ({ builder, dealer, formatter }) => indicator.bind({
  bd: builder,
  fn: dealer,
  fm: formatter
})
