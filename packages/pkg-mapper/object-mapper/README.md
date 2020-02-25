# @vect/object-mapper

[![npm version][badge-npm-version]][url-npm]
[![npm download monthly][badge-npm-download-monthly]][url-npm]
[![npm download total][badge-npm-download-total]][url-npm]
[![npm dependents][badge-npm-dependents]][url-github]
[![npm license][badge-npm-license]][url-npm]
[![pp install size][badge-pp-install-size]][url-pp]
[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]

[//]: <> (Shields)
[badge-npm-version]: https://flat.badgen.net/npm/cell/@vect/object-mapper
[badge-npm-download-monthly]: https://flat.badgen.net/npm/dm/@vect/object-mapper
[badge-npm-download-total]:https://flat.badgen.net/npm/dt/@vect/object-mapper
[badge-npm-dependents]: https://flat.badgen.net/npm/dependents/@vect/object-mapper
[badge-npm-license]: https://flat.badgen.net/npm/license/@vect/object-mapper
[badge-pp-install-size]: https://flat.badgen.net/packagephobia/install/@vect/object-mapper
[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/vect
[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/vect

[//]: <> (Link)
[url-npm]: https://npmjs.org/package/@vect/object-mapper
[url-pp]: https://packagephobia.now.sh/result?p=@vect/object-mapper
[url-github]: https://github.com/hoyeungw/vect

##### Util for array

#### Install
```console
$ npm install @vect/object-mapper
```

#### Functions

- **mapper** map object values and return a new object
- **mutate** map object values and return the object itself
- **mapKeys** map object keys and return a new object
- **mapEntries** map object entries and return a new object

#### Usage
```js
import { mapper, mutate, mapKeys, mapEntries } from '@vect/object-mapper'

const ob = {
  AMEE: 'Red Planet',
  AMP: 'Avatar',
  Maximilian: 'The Black Hole',
  Terminatrix: 'Terminator 3',
}

mapper(ob, value => value.length)
mapKeys(ob, key => key.slice(0, 4))
mapEntries(ob, ([key, value], i) => [`${key}_${i}`, value.length])
mutate(ob, value => value.length)
```

#### Meta
[LICENSE (MIT)](LICENSE)
