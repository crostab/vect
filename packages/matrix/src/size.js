export const size = mx => {
  const l = mx?.length
  return [l, l ? mx[0]?.length : undefined]
}
