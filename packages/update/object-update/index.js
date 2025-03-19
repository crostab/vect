import { nullish } from '@typen/nullish';
import { getOrVec, getOr } from '@vect/object-index';

const replenish = (object, another) => {
  for (let k in another)
    if (nullish(object[k]))
      object[k] = another[k];
  return object
};

function appendValue(k, v) {
  return getOrVec.call(this, k).push(v)
}

function assignValue(k, i, v) {
  getOr.call(this, k)[i] = v;
}

export { appendValue, assignValue, replenish };
