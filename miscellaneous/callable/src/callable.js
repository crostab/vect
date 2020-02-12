export class Callable extends Function {
  constructor (f) {
    super()
    Reflect.setPrototypeOf(f, new.target.prototype)
    return f
  }
}

