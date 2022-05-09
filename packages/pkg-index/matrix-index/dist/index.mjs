const size = mx => {
  let h, r;
  return mx && (h = mx.length) && (r = mx[0]) ? [h, r.length] : [h, r];
};
const height = mx => mx === null || mx === void 0 ? void 0 : mx.length;
const width = mx => {
  var _mx$;

  return mx !== null && mx !== void 0 && mx.length ? (_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length : null;
};

function column(y, h) {
  const mx = this,
        col = Array(h ?? (h = this === null || this === void 0 ? void 0 : this.length));

  for (--h; h >= 0; h--) col[h] = mx[h][y];

  return col;
}

export { column, height, size, width };
