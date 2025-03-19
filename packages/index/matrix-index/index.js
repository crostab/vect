const isMatrix = mx => Array.isArray(mx) && Array.isArray(mx[0]);

const size = mx => {
  let h, r;
  return mx && (h = mx.length) && (r = mx[0])
    ? [ h, r.length ]
    : [ h, r ]
};

const height = mx => mx?.length;

const width = mx => mx?.length ? mx[0]?.length : null;

const certSize = (mx, h, w) => {
  if (!h) h = mx?.length;
  if (!w) w = h && mx[0]?.length;
  return [ h, w ]
};


/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */
const coins = mx => isMatrix(mx)
  ? mx[0].map((_, i) => i)
  : [];

function column(y, h) {
  const mx = this, col = Array(h ?? (h = this?.length));
  for (--h; h >= 0; h--) col[h] = mx[h][y];
  return col
}

export { certSize, coins, column, height, isMatrix, size, width };
