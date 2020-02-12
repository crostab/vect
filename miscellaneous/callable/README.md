## @vect/callable
Make a class callable by inherit the class Callable.

[//]: <> (Shields)
[badge-npm-version]: https://flat.badgen.net/npm/v/@vect/callable
[badge-npm-download-monthly]: https://flat.badgen.net/npm/dm/@vect/callable
[badge-npm-download-total]:https://flat.badgen.net/npm/dt/@vect/callable
[badge-npm-dependents]: https://flat.badgen.net/npm/dependents/@vect/callable
[badge-npm-license]: https://flat.badgen.net/npm/license/@vect/callable
[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/@vect/callable
[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/@vect/callable
[badge-pp-install-size]: https://flat.badgen.net/packagephobia/install/@vect/callable

[//]: <> (Link)
[url-npm]: https://npmjs.org/package/@vect/callable
[url-github]: https://github.com/hoyeungw/@vect/callable
[url-pp]: https://packagephobia.now.sh/result?p=@vect/callable

## Features

- ES2015 syntax

## Install
```console
$ npm install @vect/callable
```

## Usage
```js
import { Callable } from '@vect/callable'

class CallableClass extends Callable {
  constructor (a, b) {
    super(x => this.a + this.b + x)
    this.a = a
    this.b = b
  }
}

const callableClass = new CallableClass(5, 4)
console.log(callableClass(3)) // 12

```

## Meta
[LICENSE (MIT)](/LICENSE)

Copyright (c) 2019-present, Haoyang (Vincent) Wang

[//]: <> (Shields)
[npm-image]: https://img.shields.io/npm/v/@vect/callable.svg?style=flat-square
[quality-image]: http://npm.packagequality.com/shield/@vect/callable.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/@vect/callable.svg?style=flat-square
[total-download-image]:https://img.shields.io/npm/dt/@vect/callable.svg?style=flat-square
[license-image]: https://img.shields.io/npm/l/@vect/callable.svg?style=flat-square
[commit-image]: https://img.shields.io/github/commit-activity/y/hoyeungw/@vect/callable?style=flat-square
[size]: https://packagephobia.now.sh/badge?p=@vect/callable?style=flat-square

[//]: <> (Link)
[npm-url]: https://npmjs.org/package/@vect/callable
[quality-url]: http://packagequality.com/#?package=@vect/callable
[github-url]: https://github.com/hoyeungw/@vect/callable
[size-url]: https://packagephobia.now.sh/result?p=@vect/callable
