# @vect/object-zipper

[![npm version][badge-npm-version]][url-npm]
[![npm download monthly][badge-npm-download-monthly]][url-npm]
[![npm download total][badge-npm-download-total]][url-npm]
[![npm dependents][badge-npm-dependents]][url-github]
[![npm license][badge-npm-license]][url-npm]
[![pp install size][badge-pp-install-size]][url-pp]
[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]

[//]: <> (Shields)

[badge-npm-version]: https://flat.badgen.net/npm/v/@vect/object-zipper

[badge-npm-download-monthly]: https://flat.badgen.net/npm/dm/@vect/object-zipper

[badge-npm-download-total]:https://flat.badgen.net/npm/dt/@vect/object-zipper

[badge-npm-dependents]: https://flat.badgen.net/npm/dependents/@vect/object-zipper

[badge-npm-license]: https://flat.badgen.net/npm/license/@vect/object-zipper

[badge-pp-install-size]: https://flat.badgen.net/packagephobia/install/@vect/object-zipper

[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/vect

[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/vect

[//]: <> (Link)

[url-npm]: https://npmjs.org/package/@vect/object-zipper

[url-pp]: https://packagephobia.now.sh/result?prev=@vect/object-zipper

[url-github]: https://github.com/hoyeungw/vect

##### Util for array

#### Install

```console
$ npm install @vect/object-zipper
```

#### Functions

- **zipper** map object values and return a new object
- **mutazip** map object values and return the object itself
- **mapKeys** map object keys and return a new object
- **mapEntries** map object entries and return a new object

#### Usage

```js
import { zipper, mutazip, mapKeys, mapEntries } from '@vect/object-zipper'

const ot = {
  AMEE: 'Red Planet',
  AMP: 'Avatar',
  Maximilian: 'The Black Hole',
  Terminatrix: 'Terminator 3',
}

zipper(ot, value => value.length)
mapKeys(ot, key => key.slice(0, 4))
mapEntries(ot, ([ key, value ], i) => [ `${key}_${i}`, value.length ])
mutazip(ot, value => value.length)
```

#### Meta

[LICENSE (MIT)](LICENSE)
