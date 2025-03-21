/** @type {function(*):boolean} */
const isVector = Array.isArray;

const first = (ve) => ve[0];

const last = (ve) => ve[ve.length - 1];

const len = (ve) => ve?.length;

function swap(i, j) {
  const el = this[i];
  this[i] = this[j];
  return this[j] = el
}

/**
 * @param {*[]} vec - input array to be mutated
 * @param {number[]} inds - indexes in ascending order, indicating which elements to bunch, e.g. [1,3,5] to [1,2,4]
 * @returns {*[]} mutated input array, with elements at provided indexes bunched
 */
const rollBunch = (vec, inds) => {
  let lo = inds[0];
  for (let i of inds) {
    if (i > lo) rollLo.call(vec, i, lo);
    lo++;
  }
  return vec
};

function rollTop(vec, inds) {
  for (let lo = 0, hi = inds.length; lo < hi; lo++) {
    const ind = inds[lo];
    if (ind > lo) rollLo.call(vec, ind, lo);
  }
  return vec
}

function fitRoll(inds) {
  for (let hi = inds.length - 1; hi > 0; hi--) {
    const cu = inds[hi];
    if (!~cu) continue
    for (let i = 0; i < hi; i++) if (inds[i] > cu) inds[hi]++;
  }
  return inds
}

/**
 * Roll vec[i] up to vec[nx] where i <= nx
 * @param i
 * @param hi
 */
function rollUp(i, hi) {
  const el = this[i];
  while (i < hi) this[i] = this[++i]; // roll to upper index by moving next element lower down
  return this[hi] = el
}


/**
 * Roll vec[i]
 * pt <= i
 */
function rollLo(i, lo) {
  const el = this[i];
  while (lo < i) this[i] = this[--i]; // roll to lower index by moving previous element higher up
  return this[lo] = el
}


const Swap = vec => swap.bind(vec);

export { Swap, first, fitRoll, rollLo as insertDown, rollUp as insertUp, isVector, last, len, rollBunch, rollLo, rollTop, rollUp, swap };
