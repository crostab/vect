import { size, draft } from '@vect/matrix';

const multiply = (a, b) => {
  const [ha, wa] = size(a);
  const [hb, wb] = size(b);

  if (wa !== hb) {
    throw new Error('incompatible sizes');
  }

  const mx = draft(ha, wb);

  for (let i = 0; i < ha; i++) {
    for (let j = 0; j < wb; j++) {
      let sum = 0;

      for (let k = 0; k < wa; k++) sum += a[i][k] * b[k][j];

      mx[i][j] = sum;
    }
  }

  return mx;
};

const height = mx => mx === null || mx === void 0 ? void 0 : mx.length;

const width = mx => {
  var _mx$;

  return mx !== null && mx !== void 0 && mx.length ? (_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length : null;
};

/**
 * Transpose a 2d-array.
 * @param {*[][]} mx
 * @returns {*[][]}
 */

const transpose = mx => {
  const h = height(mx),
        w = width(mx),
        cols = Array(w);

  for (let j = 0; j < w; j++) for (let i = 0, col = cols[j] = Array(h); i < h; i++) col[i] = mx[i][j];

  return cols;
};

export { multiply, transpose };
