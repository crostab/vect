const swap = function (i, j) {
  const temp = this[i];
  this[i] = this[j];
  return this[j] = temp;
};
const Swap = vec => swap.bind(vec);

export { Swap, swap };
