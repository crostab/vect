import { FUN } from '@typen/enum-data-types';
import { size } from '@vect/matrix-index';
import { init } from '@vect/vector-init';

const stat = function (mx) {
  const [h, w] = size(mx);
  const {
    init: init$1,
    acc,
    to
  } = this;
  let i = 0,
    vec = init$1 ? init(w, init$1) : mx[i++].slice();
  for (; i < h; i++) for (let row = mx[i], j = 0; j < w; j++) vec[j] = acc(vec[j], row[j], i, j);
  return to ? to(vec, h, w) : vec;
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
