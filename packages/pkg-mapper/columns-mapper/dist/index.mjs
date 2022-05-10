import { width, column } from '@vect/matrix-index';

const mapper = (mx, colTo) => {
  const h = mx === null || mx === void 0 ? void 0 : mx.length,
        w = width(mx),
        vec = Array(w),
        col = column.bind(mx);

  for (let j = 0; j < w; j++) vec[j] = colTo(col(j, h), j);

  return vec;
};
const iterate = function (mx, onCol) {
  const h = mx === null || mx === void 0 ? void 0 : mx.length,
        w = width(mx),
        col = column.bind(mx);

  for (let j = 0; j < w; j++) onCol.call(this, col(j, h), j);
};

export { iterate, mapper };
