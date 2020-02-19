import { mapper as mapper$1 } from '@vect/vector-mapper';

const size = mx => {
  let h, r;
  return mx && (h = mx.length) && (r = mx[0]) ? [h, r.length] : [h, r];
};

const column = function (c, h) {
  return mapper$1(this, r => r[c], h);
};

const mapper = (mx, mapOnColumns) => {
  const [h, w] = size(mx),
        columns = Array(w);

  for (let c = 0, col = column.bind(mx); c < w; c++) columns[c] = mapOnColumns(col(c, h), c);

  return columns;
};

export { mapper };
