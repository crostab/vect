import { iterate } from '@vect/vector-mapper'

export const indicator = function (vec, l, tenant) {
  const { bd, fn, pk } = this
  tenant = tenant || (bd ? bd(vec) : {})
  iterate.call(tenant, vec, fn, l)
  return pk ? pk(tenant) : tenant
}

export const indicatorBy = (vec, thisArg, dealer, picker, l) => indicator.call({
    bd: null,
    fn: dealer,
    pk: picker
  },
  vec, l, thisArg)

export const Indicator = ({ builder, dealer, picker }) => indicator.bind({
  bd: builder,
  fn: dealer,
  pk: picker
})
