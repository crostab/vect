# @vect/object-fn

[![npm version][badge-npm-version]][url-npm]
[![npm download monthly][badge-npm-download-monthly]][url-npm]
[![npm download total][badge-npm-download-total]][url-npm]
[![npm dependents][badge-npm-dependents]][url-github]
[![npm license][badge-npm-license]][url-npm]
[![pp install size][badge-pp-install-size]][url-pp]
[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]

[//]: <> (Shields)
[badge-npm-version]: https://flat.badgen.net/npm/cell/@vect/object-fn
[badge-npm-download-monthly]: https://flat.badgen.net/npm/dm/@vect/object-fn
[badge-npm-download-total]:https://flat.badgen.net/npm/dt/@vect/object-fn
[badge-npm-dependents]: https://flat.badgen.net/npm/dependents/@vect/object-fn
[badge-npm-license]: https://flat.badgen.net/npm/license/@vect/object-fn
[badge-pp-install-size]: https://flat.badgen.net/packagephobia/install/@vect/object-fn
[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/vect
[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/vect

[//]: <> (Link)
[url-npm]: https://npmjs.org/package/@vect/object-fn
[url-pp]: https://packagephobia.now.sh/result?p=@vect/object-fn
[url-github]: https://github.com/hoyeungw/vect

##### Util for array

#### Install
```console
$ npm install @vect/object-fn
```

#### Functions

- **fn** map object values and return a new object
- **append** map object values and return the object itself
- **mapKeys** map object keys and return a new object
- **mapEntries** map object entries and return a new object

#### Usage
```js
import { fn, append, mapKeys, mapEntries } from '@vect/object-fn'

const ob = {
  AMEE: 'Red Planet',
  AMP: 'Avatar',
  Maximilian: 'The Black Hole',
  Terminatrix: 'Terminator 3',
}

fn(ob, value => value.length)
mapKeys(ob, key => key.slice(0, 4))
mapEntries(ob, ([key, value], i) => [`${key}_${i}`, value.length])
append(ob, value => value.length)
```

#### Meta
[LICENSE (MIT)](LICENSE)
