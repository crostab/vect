/**
 *
 * @param {Object} o
 * @param {*[]} keys
 */
function select(o, keys) {
  const ob = {};

  for (const k in o) if (keys.includes(k)) ob[k] = o[k];

  return ob;
}

export { select };
