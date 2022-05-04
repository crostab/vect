import { FUN } from '@typen/enum-data-types';

const iterate = (nested, onVXY) => {
  let inner;
  if (nested) for (let x in nested) {
    if (inner = nested[x]) for (let y in inner) {
      onVXY(inner[y], x, y);
    }
  }
};
const iterateXY = (nested, onXY) => {
  let inner;
  if (nested) for (let x in nested) {
    if (inner = nested[x]) for (let y in inner) {
      onXY(x, y);
    }
  }
};
const iterateY = (nested, onY) => {
  let inner;
  if (nested) for (let x in nested) {
    if (inner = nested[x]) for (let y in inner) {
      onY(y);
    }
  }
};
const indexedIterate = (nested, onXYV) => {
  let inner;
  if (nested) for (let x in nested) {
    if (inner = nested[x]) for (let y in inner) {
      onXYV(x, y, inner[y]);
    }
  }
};
const indexedMutate = (nested, fnXYV) => {
  let inner;
  if (nested) for (let x in nested) {
    if (inner = nested[x]) for (let y in inner) {
      inner[y] = fnXYV(x, y, inner[y]);
    }
  }
  return nested;
};

const side = nested => {
  return Object.keys(nested);
}; // distinct(Object.values(this.pairs).map(Object.keys).flat())

const head = nested => {
  const vec = [];
  iterateY(nested, y => {
    if (vec.indexOf(y) < 0) vec.push(y);
  });
  return vec;
};

const nestedToRows = nested => {
  const inners = [];
  iterate(nested, (v, x, y) => {
    inners.push([x, y, v]);
  });
  return inners;
};

function updateCell(x, y, v) {
  (this[x] ?? (this[x] = {}))[y] = v;
}
function appendCell(x, y, v) {
  const temp = this[x] ?? (this[x] = {});
  const list = temp[y] ?? (temp[y] = []);
  list.push(v);
}
function assignCell(x, y, k, v) {
  const temp = this[x] ?? (this[x] = {});
  const obj = temp[y] ?? (temp[y] = {});
  obj[k] = v;
}

const transpose = nested => {
  const o = {};
  indexedIterate(nested, (x, y, v) => updateCell.call(o, y, x, v));
  return o;
};

function* simpleIndexed(nested) {
  let inner;
  if (nested) for (let x in nested) {
    if (inner = nested[x]) for (let y in inner) {
      yield [x, y, inner[y]];
    }
  }
}
function* filterIndexed(nested, filter) {
  let inner;
  if (nested) for (let x in nested) {
    if (inner = nested[x]) for (let y in inner) {
      const v = inner[y];
      if (filter(x, y, v)) yield [x, y, v];
    }
  }
}
function* mappedIndexed(nested, mapper) {
  let inner;
  if (nested) for (let x in nested) {
    if (inner = nested[x]) for (let y in inner) {
      yield mapper(x, y, inner[y]);
    }
  }
}
function* filterMappedIndexed(nested, filter, mapper) {
  let inner;
  if (nested) for (let x in nested) {
    if (inner = nested[x]) for (let y in inner) {
      const v = inner[y];
      if (filter(x, y, v)) yield mapper(x, y, v);
    }
  }
}
/**
 *
 * @param {Object<string,Object<string,any>>} nested
 * @param {function|{ [by]:function, to:function }} [conf]
 * @returns {Generator<*, void, *>}
 */

function* indexed(nested, conf) {
  const by = conf === null || conf === void 0 ? void 0 : conf.by,
        to = (conf === null || conf === void 0 ? void 0 : conf.to) ?? conf;

  if (typeof by === FUN) {
    if (typeof to === FUN) {
      yield* filterMappedIndexed(nested, by, to);
    } else {
      yield* filterIndexed(nested, by);
    }
  } else {
    if (typeof to === FUN) {
      yield* mappedIndexed(nested, to);
    } else {
      yield* simpleIndexed(nested);
    }
  }
}

export { appendCell, assignCell, filterIndexed, filterMappedIndexed, head, indexed, indexedIterate, indexedMutate, iterate, iterateXY, iterateY, mappedIndexed, nestedToRows, side, simpleIndexed, transpose, updateCell as update, updateCell };
