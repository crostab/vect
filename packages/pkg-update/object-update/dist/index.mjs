const nullish = x => x === null || x === void 0;

const replenish = (object, another) => {
  for (let k in another) if (nullish(object[k])) object[k] = another[k];

  return object;
};

function appendValue(k, v) {
  (this[k] ?? (this[k] = [])).push(v);
}
function assignValue(k, i, v) {
  (this[y] ?? (this[y] = {}))[i] = v;
}

export { appendValue, assignValue, replenish };
