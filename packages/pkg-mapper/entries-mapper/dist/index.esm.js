/**
 *
 * @param {[*,*][]} ents
 * @param {function} keyFn
 * @param {function} [valFn]
 * @param {number} [l]
 * @returns {undefined}
 */
const iterate = function (ents, keyFn, valFn, l) {
  l = l || ents && ents.length, valFn = valFn || keyFn;

  for (let r; --l >= 0 && (r = ents[l]);) {
    keyFn.call(this, r[0], l), valFn.call(this, r[1], l);
  }
};

/**
 *
 * @param {[*,*][]} ents
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
const mapper = (ents, keyMap, valMap, l) => {
  l = l || ents && ents.length, valMap = valMap || keyMap;
  const vec = Array(l);

  for (let r; --l >= 0 && (r = ents[l]);) vec[l] = [keyMap(r[0], l), valMap(r[1], l)];

  return vec;
};

/**
 *
 * @param {[*,*][]} ents
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
const mutate = (ents, keyMap, valMap, l) => {
  l = l || ents && ents.length, valMap = valMap || keyMap;

  for (let r; --l >= 0 && (r = ents[l]);) {
    r[0] = keyMap(r[0], l), r[1] = valMap(r[1], l);
  }

  return ents;
};

export { iterate, mapper, mutate };
