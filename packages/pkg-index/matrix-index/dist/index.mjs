const size = mx => {
  let h, r;
  return mx && (h = mx.length) && (r = mx[0]) ? [h, r.length] : [h, r];
};
const height = mx => mx === null || mx === void 0 ? void 0 : mx.length;
const width = mx => {
  let r;
  return height(mx) && (r = mx[0]) ? r.length : r;
};

export { height, size, width };
