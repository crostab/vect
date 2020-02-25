const wind = (keys, values) => {
  const o = {},
        {
    length
  } = keys;

  for (let i = 0; i < length; i++) o[keys[i]] = values[i];

  return o;
};
/**
 * Shallow.
 * @param {string[]} keys
 * @param {*} value
 * @return {Object<string,*>}
 */

const iso = (keys, value) => {
  let o = {};

  for (let k of keys) o[k] = value;

  return o;
};
const init = entries => {
  let o = {};

  for (let [k, v] of entries) o[k] = v;

  return o;
};

export { init, iso, wind };
