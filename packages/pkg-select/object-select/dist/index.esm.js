/**
 *
 * @param {Object} o
 * @param {*[]} keys
 */
function select(o, keys) {
  const ob = {},
        l = keys.length;

  for (let i = 0, k; i < l; i++) ob[k = keys[i]] = o[k];

  return ob;
}

const selectValues = function (o, keys) {
  const l = keys.length,
        ve = Array(l);

  for (let i = 0; i < l; i++) ve[i] = o[keys[i]];

  return ve;
};

export { select, selectValues };
