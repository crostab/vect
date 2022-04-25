import { FUN, OBJ } from '@typen/enum-data-types';

const iterate = (nested, onVXY) => {
  let inner;
  if (!nested) return;

  for (let x in nested) {
    if (!(inner = nested[x])) continue;

    for (let y in inner) {
      onVXY(inner[y], x, y);
    }
  }
};
const iterateXY = (nested, onXY) => {
  let inner;
  if (!nested) return;

  for (let x in nested) {
    if (!(inner = nested[x])) continue;

    for (let y in inner) {
      onXY(x, y);
    }
  }
};
const iterateY = (nested, onY) => {
  let inner;
  if (!nested) return;

  for (let x in nested) {
    if (!(inner = nested[x])) continue;

    for (let y in inner) {
      onY(y);
    }
  }
};
const indexedIterate = (nested, onXYV) => {
  let inner;
  if (!nested) return;

  for (let x in nested) {
    if (!(inner = nested[x])) continue;

    for (let y in inner) {
      onXYV(x, y, inner[y]);
    }
  }
};
const indexedMutate = (nested, fnXYV) => {
  let inner;
  if (!nested) return;

  for (let x in nested) {
    if (!(inner = nested[x])) continue;

    for (let y in inner) {
      inner[y] = fnXYV(x, y, inner[y]);
    }
  }
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

const transpose = nested => {
  const o = {};
  iterate(nested, (v, x, y) => {
    const xToV = o[y] ?? (o[y] = {});
    xToV[x] = v;
  });
  return o;
};

function* simpleIndexed(nested, to) {
  let inner;
  if (!nested) return;

  for (let x in nested) {
    if (inner = nested[x]) for (let y in inner) {
      yield to(x, y, inner[y]);
    }
  }
}
/**
 *
 * @param {Object<string,Object<string,any>>} nested
 * @param {function|{
 * [by]:function,
 * to:function
 * }} conf
 * @returns {Generator<*, void, *>}
 */

function* indexed(nested, conf) {
  if (typeof conf === FUN) {
    yield* simpleIndexed(nested, conf);
    return;
  }

  if (typeof conf === OBJ) {
    const {
      by,
      to
    } = conf;
    let inner, v;
    if (!nested) return;

    for (let x in nested) {
      if (inner = nested[x]) for (let y in inner) {
        v = inner[y];
        if (by(x, y, v)) yield to(x, y, v);
      }
    }
  }
}

export { head, indexed, indexedIterate, indexedMutate, iterate, iterateXY, iterateY, nestedToRows, side, simpleIndexed, transpose };
