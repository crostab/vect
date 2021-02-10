import { init } from '@vect/vector-init';
import { mapper } from '@vect/vector-mapper';
import { mutazip } from '@vect/vector-zipper';

const numSkeleton = (s = [], b = [], m = []) => ({
  s,
  b,
  m,

  n() {
    return 0;
  }

});

const ACCUM = 0;
const SUM = 1;
const INCRE = 1;
const COUNT = 2;

function pivotRecord(samples, {
  x,
  y,
  z,
  filter,
  mode = SUM
}) {
  let notate = createNotate(x, y, z, mode, filter).bind(this);

  for (let sample of samples) notate(sample);

  return this;
}

const createNotate = (x, y, z, mode, filter) => {
  const recorder = selectRecord(mode);
  return !filter ? function (r) {
    recorder.call(this, r[x], r[y], r[z]);
  } : function (r) {
    if (filter(r[z])) recorder.call(this, r[x], r[y], r[z]);
  };
};

const selectRecord = mode => {
  if (mode === INCRE) return function (x, y, v) {
    const {
      m,
      s,
      b
    } = this,
          row = m[s.indexOf(x)];
    if (row) row[b.indexOf(y)] += v;
  };
  if (mode === ACCUM) return function (x, y, v) {
    const {
      m,
      s,
      b
    } = this,
          row = m[s.indexOf(x)];
    if (row) row[b.indexOf(y)].push(v);
  };
  if (mode === COUNT) return function (x, y) {
    const {
      m,
      s,
      b
    } = this,
          row = m[s.indexOf(x)];
    if (row) row[b.indexOf(y)]++;
  };
  return () => {};
};

const arid = function (x) {
  let i = this.s.indexOf(x);
  if (i >= 0) return i;
  return i + (this.m.push(init(this.b.length, this.n)), this.s.push(x));
};
const acid = function (y) {
  let j = this.b.indexOf(y);
  if (j >= 0) return j;
  return j + (mapper(this.m, row => row.push(this.n()), this.s.length), this.b.push(y));
};
const expand = function (x, y) {
  arid.call(this, x), acid.call(this, y);
};

function pivotSpread(samples, {
  x,
  y,
  z,
  filter,
  mode = SUM
}) {
  let notate = createNotate$1(x, y, z, mode, filter).bind(this);

  for (let sample of samples) notate(sample);

  return this;
}

const createNotate$1 = (x, y, z, mode, filter) => {
  const record = selectSpread(mode);
  return !filter ? function (r) {
    record.call(this, r[x], r[y], r[z]);
  } : function (r) {
    (filter(r[z]) ? record : expand).call(this, r[x], r[y], r[z]);
  };
};

const selectSpread = mode => {
  if (mode === INCRE) return function (x, y, z) {
    this.m[arid.call(this, x)][acid.call(this, y)] += z;
  };
  if (mode === ACCUM) return function (x, y, z) {
    this.m[arid.call(this, x)][acid.call(this, y)].push(z);
  };
  if (mode === COUNT) return function (x, y) {
    this.m[arid.call(this, x)][acid.call(this, y)]++;
  };
  return expand;
};

class Pivot {
  constructor(x, y, z, mode, filter) {
    this.data = {};
    Object.assign(this.data, numSkeleton());
    Object.assign(this, {
      x,
      y,
      z,
      mode,
      filter
    });
  }

  get configs() {
    const {
      x,
      y,
      z,
      mode,
      filter
    } = this;
    return {
      x,
      y,
      z,
      mode,
      filter
    };
  }

  spreadPivot(samples) {
    return pivotSpread.call(this.data, samples, this.configs);
  }

  recordPivot(samples) {
    return pivotRecord.call(this.data, samples, this.configs);
  }

}

/**
 *
 * @param {*[][]} samples
 * @param {number} x
 * @param {number} y
 * @param {{index,mode}[]} band
 * @param filter
 * @returns {cubicRecord}
 */

function cubicRecord(samples, {
  x,
  y,
  band,
  filter
}) {
  const depth = band.length;
  const notate = createNotate$2(x, y, band, filter, depth).bind(this);

  for (let sample of samples) {
    notate(sample);
  }

  return this;
}

const createNotate$2 = (x, y, band, filter, depth) => {
  band.forEach(o => o.update = selectUpdater(o.mode));
  return !filter ? function (sample) {
    spread.call(this, sample[x], sample[y], sample, band, depth);
  } : function (sample) {
    if (filter(sample)) spread.call(this, sample[x], sample[y], sample, band, depth);
  };
};

const spread = function (x, y, sample, band, depth) {
  const {
    m,
    s,
    b
  } = this;
  let vec;
  const r = m[s.indexOf(x)];
  if (r) vec = r[b.indexOf(y)];
  if (vec) mutazip(vec, band, (target, {
    index,
    update
  }) => update(target, sample[index]), depth);
};

const selectUpdater = mode => {
  if (mode === INCRE) return (target, value) => target + value;
  if (mode === ACCUM) return (target, value) => (target.push(value), target);
  if (mode === COUNT) return target => target++;
  return () => {};
};

/**
 *
 * @param {*[][]} samples
 * @param {number} x
 * @param {number} y
 * @param {{index,mode}[]} band
 * @param filter
 * @returns {cubicSpread}
 */

function cubicSpread(samples, {
  x,
  y,
  band,
  filter
}) {
  const depth = band.length;
  const nvs = vacancyCreators(band);
  const notate = createNotate$3(x, y, band, filter, depth).bind(this);

  this.n = () => mapper(nvs, nv => nv(), depth);

  for (let sample of samples) {
    notate(sample);
  }

  return this;
}

const createNotate$3 = (x, y, band, filter, depth) => {
  band.forEach(o => o.update = selectUpdater$1(o.mode));
  return !filter ? function (sample) {
    spread$1.call(this, sample[x], sample[y], sample, band, depth);
  } : function (sample) {
    filter(sample) ? spread$1.call(this, sample[x], sample[y], sample, band, depth) : expand.call(this, sample[x], sample[y]);
  };
};

const spread$1 = function (x, y, sample, band, depth) {
  mutazip(this.m[arid.call(this, x)][acid.call(this, y)], band, (target, {
    index,
    update
  }) => update(target, sample[index]), depth);
};

const selectUpdater$1 = mode => {
  if (mode === INCRE) return (target, value) => target + value;
  if (mode === ACCUM) return (target, value) => (target.push(value), target);
  if (mode === COUNT) return target => target++;
  return expand;
};

const vacancyCreators = band => band.map(({
  mode
}) => mode === ACCUM ? () => [] : () => 0);

class Cubic {
  constructor(x, y, band, filter) {
    this.data = {};
    Object.assign(this.data, numSkeleton());
    Object.assign(this, {
      x,
      y,
      band,
      filter
    });
  }

  get configs() {
    const {
      x,
      y,
      band,
      filter
    } = this;
    return {
      x,
      y,
      band,
      filter
    };
  }

  spreadCubic(samples) {
    return cubicSpread.call(this.data, samples, this.configs);
  }

  recordCubic(samples) {
    return cubicRecord.call(this.data, samples, this.configs);
  }

}

export { Cubic, Pivot };
