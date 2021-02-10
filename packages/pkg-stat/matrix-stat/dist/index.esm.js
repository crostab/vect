import { FUN }  from '@typen/enum-data-types'
import { size } from '@vect/matrix-size'

const stat = function (mx) {
  const [h, w] = size(mx);
  if (!h || !w) return init ? init() : undefined;
  const {
    init,
    acc,
    to
  } = this;
  let i = 0,
      j = 0,
      x = init ? init() : mx[i][j++];

  for (let row; i < h && (row = mx[i]); i++) {
    for (; j < w; j++) x = acc(x, row[j], i, j);

    j = 0;
  }

  return to ? to(x, h, w) : x;
};
/**
 *
 * @param {Object|Function} config
 * @param {*|Function|function(*[],number?):*} [config.init] - create a container to hold statByInitVal
 * @param {Function|function(*,number?):*} [config.acc] - method to add current value to container when iterating
 * @param {Function|function(*,number?):*} [config.to] - method to to statByInitVal value from the container
 * @returns {Function|function(*[],number?):*}
 */

const Stat = (config = {}) => typeof config === FUN ? stat.bind({
  acc: config
}) : stat.bind(config);

export { Stat, stat };
