/**
 *
 * @param {*[]} vec
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
const marginCopy = (vec, h, t, l) => {
  const ve = Array(l = l || vec.length),
        s = l - t;

  for (--h; h >= 0; h--) ve[h] = vec[h];

  for (--l; l >= s; l--) ve[l] = vec[l];

  return ve;
};

/**
 *
 * @param {*[]} vec
 * @param {function(*)|function(*,number)} fn
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
const marginMapper = (vec, fn, h, t, l) => {
  const ve = Array(l = l || vec.length),
        s = l - t;

  for (--h; h >= 0; h--) ve[h] = fn(vec[h], h);

  for (--l; l >= s; l--) ve[l] = fn(vec[l], l);

  return ve;
};

/**
 *
 * @param {*[]} vec
 * @param {function(*)|function(*,number)} fn
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
const marginMutate = (vec, fn, h, t, l) => {
  l = l || vec.length;
  const s = l - t;

  for (--h; h >= 0; h--) vec[h] = fn(vec[h], h);

  for (--l; l >= s; l--) vec[l] = fn(vec[l], l);

  return vec;
};

export { marginCopy, marginMapper, marginMutate };
