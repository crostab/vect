## @vect/callable
Make a class callable by inherit the class Callable.

[![npm version][npm-image]][npm-url]
[![npm quality][quality-image]][quality-url]
[![npm download][download-image]][npm-url]
[![npm total-download][total-download-image]][npm-url]
[![size][size]][size-url]
[![github commit activity][commit-image]][github-url]
[![npm license][license-image]][npm-url]

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
[size]: https://packagephobia.now.sh/badge?p=@vect/callable

[//]: <> (Link)
[npm-url]: https://npmjs.org/package/@vect/callable
[quality-url]: http://packagequality.com/#?package=@vect/callable
[github-url]: https://github.com/hoyeungw/@vect/callable
[size-url]: https://packagephobia.now.sh/result?p=@vect/callable
