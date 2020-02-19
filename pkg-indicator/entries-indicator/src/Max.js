import { max as maxN } from '@aryth/comparer'

export const max = function (entries) {
  const [kpi, vpi] = this
  return entries.reduce(
    (pe, ce, i) =>
      (pe[0] = maxN(pe[0], kpi(ce[0], i)), pe[1] = maxN(pe[1], vpi(ce[1], i)), pe),
    [kpi(entries[0][0], 0), vpi(entries[0][1], 0)]
  )
}

export const maxBy = (entries, kpi, vpi) => max.call([kpi, vpi], entries)

export const Max = (kpi, vpi) => max.bind([kpi, vpi])
