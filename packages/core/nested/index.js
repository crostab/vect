const iterate = (nested, onVXY) => {
  let inner;
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      onVXY(inner[y], x, y);
    }
  }
};

const iterateXY = (nested, onXY) => {
  let inner;
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      onXY(x, y);
    }
  }
};

const iterateY = (nested, onY) => {
  let inner;
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      onY(y);
    }
  }
};

const indexedIterate = (nested, onXYV) => {
  let inner;
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      onXYV(x, y, inner[y]);
    }
  }
};

const indexedMutate = (nested, fnXYV) => {
  let inner;
  if (nested) for (let x in nested) {
    if ((inner = nested[x])) for (let y in inner) {
      inner[y] = fnXYV(x, y, inner[y]);
    }
  }
  return nested
};

const side = (nested) => {
  return Object.keys(nested)
};

// distinct(Object.values(this.pairs).map(Object.keys).flat())
const head = (nested) => {
  const vec = [];
  iterateY(nested, y => { if (vec.indexOf(y) < 0) vec.push(y); });
  return vec
};

function getRow(x) {
  return (this[x] ?? (this[x] = {}))
}

function getOr(x, y, fn = Object) {
  const row = this[x] ?? (this[x] = {});
  return row[y] ?? (row[y] = fn())
}

function getOrObj(x, y) {
  const row = this[x] ?? (this[x] = {});
  return row[y] ?? (row[y] = [])
}

function getOrVec(x, y) {
  const row = this[x] ?? (this[x] = {});
  return row[y] ?? (row[y] = [])
}

const nestedToRows = (nested) => {
  const inners = [];
  iterate(nested, (v, x, y) => {
    inners.push([x, y, v]);
  });
  return inners
};

function updateCell(x, y, v) {
  (this[x] ?? (this[x] = {}))[y] = v;
}

function appendCell(x, y, v) {
  const vec = getOrVec.call(this, x, y);
  vec.push(v);
}

function assignCell(x, y, k, v) {
  const obj = getOrObj.call(this, x, v);
  obj[k] = v;
}

const transpose = (nested) => {
  const o = {};
  indexedIterate(nested, (x, y, v) => updateCell.call(o, y, x, v));
  return o
};

function* indexedOf(nested) {
  let row;
  if (nested) for (let x in nested) {
    if ((row = nested[x])) for (let y in row) {
      yield [ x, y, row[y] ];
    }
  }
}

function* indexedBy(nested, by) {
  let row;
  if (nested) for (let x in nested) {
    if ((row = nested[x])) for (let y in row) {
      const v = row[y];
      if (by(x, y, v)) yield [ x, y, v ];
    }
  }
}

function* indexedTo(nested, to) {
  if (!to) { return yield* indexedOf(nested) }
  let row;
  if (nested) for (let x in nested) {
    if ((row = nested[x])) for (let y in row) {
      yield to(x, y, row[y]);
    }
  }
}

function* indexed(nested, by, to) {
  if (!to) { return yield* (!by ? indexedOf(nested) : indexedBy(nested, by)) }
  let row;
  if (nested) for (let x in nested) {
    if ((row = nested[x])) for (let y in row) {
      const v = row[y];
      if (by(x, y, v)) yield to(x, y, v);
    }
  }
}

export { appendCell, assignCell, getOr, getOrObj, getOrVec, getRow, head, indexed, indexedBy, indexedIterate, indexedMutate, indexedOf, indexedTo, iterate, iterateXY, iterateY, nestedToRows, side, transpose, updateCell as update, updateCell };
