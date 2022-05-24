/**
 *
 * @param {[*,*][]} entries
 * @param {Function} onKey
 * @param {Function} [onVal]
 * @param {number} [l]
 * @returns {undefined}
 */
function iterate(entries, onKey, onVal, l) {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length), onVal = onVal || onKey;

  for (let i = 0, r; i < l; i++) {
    r = entries[i], onKey.call(this, r[0], i), onVal.call(this, r[1], i);
  }
}
/**
 *
 * @param {[*,*][]} entries
 * @param {Function} onKey
 * @param {number} [l]
 * @returns {undefined}
 */

function iterateKeys(entries, onKey, l) {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);

  for (let i = 0, r; i < l; i++) {
    r = entries[i], onKey.call(this, r[0], i);
  }
}
/**
 *
 * @param {[*,*][]} entries
 * @param {Function} onVal
 * @param {number} [l]
 * @returns {undefined}
 */

function iterateValues(entries, onVal, l) {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);

  for (let i = 0, r; i < l; i++) {
    r = entries[i], onVal.call(this, r[1], i);
  }
}

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyTo
 * @param {Function} [valTo]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
function mapper(entries, keyTo, valTo, l) {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length), valTo = valTo || keyTo;
  const vec = Array(l);

  for (let i = 0, r; i < l; i++) r = entries[i], vec[i] = [keyTo(r[0], i), valTo(r[1], i)];

  return vec;
}
/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyTo
 * @param {number} [l]
 * @returns {[*,*][]}
 */

function mapKeys(entries, keyTo, l) {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);
  const vec = Array(l);

  for (let i = 0, r; i < l; i++) r = entries[i], vec[i] = [keyTo(r[0], i), r[1]];

  return vec;
}
/**
 *
 * @param {[*,*][]} entries
 * @param {Function} valTo
 * @param {number} [l]
 * @returns {[*,*][]}
 */

function mapValues(entries, valTo, l) {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);
  const vec = Array(l);

  for (let i = 0, r; i < l; i++) r = entries[i], vec[i] = [r[0], valTo(r[1], i)];

  return vec;
}

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyTo
 * @param {Function} [valTo]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
function mutate(entries, keyTo, valTo, l) {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length), valTo = valTo || keyTo;

  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[0] = keyTo(r[0], i), r[1] = valTo(r[1], i);
  }

  return entries;
}
/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyTo
 * @param {number} [l]
 * @returns {[*,*][]}
 */

function mutateKeys(entries, keyTo, l) {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);

  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[0] = keyTo(r[0], i);
  }

  return entries;
}
/**
 *
 * @param {[*,*][]} entries
 * @param {Function} valTo
 * @param {number} [l]
 * @returns {[*,*][]}
 */

function mutateValues(entries, valTo, l) {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);

  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[1] = valTo(r[1], i);
  }

  return entries;
}

export { iterate, iterateKeys, iterateValues, mapKeys, mapValues, mapper, mutate, mutateKeys, mutateValues };
