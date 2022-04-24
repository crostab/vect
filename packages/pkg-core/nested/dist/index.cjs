'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const iterate = (nested, fn) => {
  let row;
  if (!nested) return;

  for (let x in nested) {
    if (!(row = nested[x])) continue;

    for (let y in row) {
      fn(row[y], x, y);
    }
  }
};
const iterateXY = (nested, onXY) => {
  let row;
  if (!nested) return;

  for (let x in nested) {
    if (!(row = nested[x])) continue;

    for (let y in row) {
      onXY(x, y);
    }
  }
};
const iterateY = (nested, onY) => {
  let row;
  if (!nested) return;

  for (let x in nested) {
    if (!(row = nested[x])) continue;

    for (let y in row) {
      onY(y);
    }
  }
};
const side = nested => {
  return Object.keys(nested);
};
const head = nested => {
  const vec = [];
  iterateY(nested, y => {
    if (vec.indexOf(y) < 0) vec.push(y);
  });
  return vec;
};

const nestedToRows = nested => {
  const rows = [];
  iterate(nested, (v, x, y) => {
    rows.push([x, y, v]);
  });
  return rows;
};

const transpose = nested => {
  const o = {};
  iterate(nested, (v, x, y) => {
    const xToV = o[y] ?? (o[y] = {});
    xToV[x] = v;
  });
  return o;
};

exports.head = head;
exports.iterate = iterate;
exports.iterateXY = iterateXY;
exports.iterateY = iterateY;
exports.nestedToRows = nestedToRows;
exports.side = side;
exports.transpose = transpose;
