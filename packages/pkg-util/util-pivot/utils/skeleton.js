export const skeleton = (s = [], b = [], m = [], n) =>
  ({ s, b, m, n })

export const numSkeleton = (s = [], b = [], m = []) =>
  ({ s, b, m, n () { return 0 } })

export const accumSkeleton = (s = [], b = [], m = []) =>
  ({ s, b, m, n () { return [] } })
