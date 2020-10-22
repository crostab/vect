class Differentiator {
  constructor(vec) {
    this.vec = vec;
    this.pos = 0;
    this.prev = this.vec[this.pos++];
  }

  static build(vec) {
    return new Differentiator(vec);
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    return this.pos < this.vec.length ? {
      value: [this.prev, this.prev = this.vec[this.pos++]],
      done: false
    } : {
      value: void 0,
      done: true
    };
  }

}

export { Differentiator };
