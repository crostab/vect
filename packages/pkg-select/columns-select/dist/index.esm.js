import { mapper } from '@vect/column-mapper';
import { select as select$1, divide as divide$1, selectEntry } from '@vect/vector-select';
import { mapper as mapper$1, iterate } from '@vect/vector-mapper';

/**
 * @param {*[][]} mx
 * @param {number[]} ys
 * @returns {*[][]}
 */

const select = (mx, ys) => {
  const hi = (ys == null ? void 0 : ys.length) ?? 0;
  if (hi === 0) return mx;
  if (hi === 1) return mapper(mx, ys[0], x => [x]);
  return mx.map(row => select$1(row, ys, hi));
};

/**
 * The indexes should be integer array sorted by ascending.
 * Return selected rows and rest rows.
 * 'Pick' rows is new matrix, and the 'rest' points to the input matrix.
 * @param {*[]} mx
 * @param {number[]} indexes - integer array sorted ascending
 * @param {number} [hi] - length of indexes
 * @returns {{pick: *[][], rest: *[][]}} - rest points to altered original matrix, pick is an new matrix.
 */

const divide = (mx, indexes, hi) => {
  hi = hi ?? (indexes == null ? void 0 : indexes.length);
  let h = mx == null ? void 0 : mx.length,
      y;
  if (hi === 0) return {
    pick: Array(h),
    rest: mx
  };
  const pick = Array(h);
  if (hi === 1) return [y] = indexes, {
    pick: pick,
    rest: mapper$1(mx, (row, i) => (pick[i] = row.splice(y, 1), row), h)
  };
  const rest = mx;
  iterate(mx, (row, i) => {
    ({
      pick: pick[i],
      rest: rest[i]
    } = divide$1(row, indexes, hi));
  });
  return {
    pick,
    rest
  };
};

const selectEntries = (mx, keyInd, valInd) => mapper$1(mx, row => selectEntry(row, keyInd, valInd));

const selectObject = (mx, keyInd, valInd) => {
  let o = {},
      x;
  iterate(mx, row => {
    if (!((x = row[keyInd]) in o)) o[x] = row[valInd];
  });
  return o;
};

export { divide, select, selectEntries, selectObject };