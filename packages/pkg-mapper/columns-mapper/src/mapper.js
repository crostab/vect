import { Columns } from '@vect/column-getter'

export const mapper = (mx, mapOnColumns, h, w) => {
  h = h || mx?.length, w = w || h && mx[0]?.length
  // 'mapperColumns' |> logger
  const tcol = Array(w)
  for (let j = 0, cols = Columns(mx); j < w; j++) {
    tcol[j] = mapOnColumns(cols(j, h), j)
    // Xr().index(j).col(cols(j, h)).result(tcol[j]) |> logger
  }
  // tcol |> logger
  return tcol
}


