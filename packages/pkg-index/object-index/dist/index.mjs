const first = o => {
  for (let k in o) return k;
};
const firstValue = o => o[first(o)];
const firstEntry = o => {
  const k = first(o);
  return [k, o[k]];
};
const last = o => {
  let k;

  for (let x in o) {
    k = x;
  }

  return k;
};
const lastValue = o => o[last(o)];
const lastEntry = o => {
  const k = last(o);
  return [k, o[k]];
};
const len = o => {
  let hi = 0;

  for (let k in o) hi++;

  return hi;
};
const isEmpty = o => {
  for (let k in o) return false;

  return true;
};

export { first, firstEntry, firstValue, isEmpty, last, lastEntry, lastValue, len };
