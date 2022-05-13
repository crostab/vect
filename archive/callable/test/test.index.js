import { Callable } from '../src/callable'

/** @type {function<number,number>} */
class CallableClass extends Callable {
  constructor (a, b) {
    super(x => this.a + this.b + x)
    this.a = a
    this.b = b
  }
}

class CallableTest {
  static test () {
    const callableClass = new CallableClass(5, 4)
    callableClass(3) |> console.log
  }
}

CallableTest.test()
