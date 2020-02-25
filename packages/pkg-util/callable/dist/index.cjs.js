'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class Callable extends Function {
  constructor(f) {
    super();
    Reflect.setPrototypeOf(f, new.target.prototype);
    return f;
  }

}

exports.Callable = Callable;
