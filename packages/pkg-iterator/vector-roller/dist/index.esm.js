import { acquire } from '@vect/vector-merge';

class Roller {
  constructor(list, depth = 1) {
    this.list = list;
    this.pos = --depth;
    this.roll = acquire([void 0], list.slice(0, this.pos));
  }

  static build(list, depth) {
    return new Roller(list, depth);
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    const {
      roll,
      list
    } = this;
    return this.pos < list.length ? {
      value: (roll.shift(), roll.push(list[this.pos++]), roll),
      done: false
    } : {
      value: void 0,
      done: true
    };
  }

}

export { Roller };
