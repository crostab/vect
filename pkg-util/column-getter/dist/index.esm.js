import { mapper } from '@vect/vector-mapper';

const column = (mx, c, h) => mapper(mx, r => r[c], h);

const columns = function (y, h) {
  return mapper(this, r => r[y], h);
};

const Columns = mx => columns.bind(mx);

export { Columns, column };
