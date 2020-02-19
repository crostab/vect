import { min as minN } from '@aryth/comparer'

export const min = function (entries) {
  const [kpi, vpi] = this
  return entries.reduce(
    (pe, ce, i) =>
      (pe[0] = minN(pe[0], kpi(ce[0], i)), pe[1] = minN(pe[1], vpi(ce[1], i)), pe),
    [kpi(entries[0][0], 0), vpi(entries[0][1], 0)]
  )
}

export const minBy = (entries, kpi, vpi) => min.call([kpi, vpi], entries)

export const Min = (kpi, vpi) => min.bind([kpi, vpi])
