<div style="text-align:center">
	<img src="media/logo.default.png" />
</div>

# @vect
:clubs: Simplified data analysis in JS. Easier to use array, 2d-array, objects

[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]

[//]: <> (Shields)
[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/vect
[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/vect
[url-github]: https://github.com/hoyeungw/vect

## Features

- Modules decoupled. Submodules are installable if you only need specific function
- Lightweight and fast
- ES-module support

## Install

```console
$ npm install @vect/<tool-name>
```

## Tools

|                                                  |                                         |         |
| ------------------------------------------------ | --------------------------------------- | ------- |
| [**vector**](pkg-core/vector)                    | Functions for 1d-array(vector)          | core    |
| [**matrix**](pkg-core/matrix)                    | Functions for 2d-array(matrix)          | core    |
| [**vector-mapper**](pkg-mapper/vector-mapper)    | Mapper & mutate for vector              | mapper  |
| [**matrix-mapper**](pkg-mapper/matrix-mapper)    | Mapper & mutate for matrix              | mapper  |
| [**column-mapper**](pkg-mapper/column-mapper)    | Mapper & mutate for column in matrix    | mapper  |
| [**columns-mapper**](pkg-mapper/columns-mapper)  | Mapper & mutate for columns in matrix   | mapper  |
| [**entries-mapper**](pkg-mapper/entries-mapper)  | Mapper & mutate for entries             | mapper  |
| [**object-mapper**](pkg-mapper/object-mapper)    | Mapper & mutate for object              | mapper  |
| [**vector-zipper**](pkg-zipper/vector-zipper)    | Zipper & mutazip for vector             | zipper  |
| [**matrix-zipper**](pkg-zipper/matrix-zipper)    | Zipper & mutazip for matrix             | zipper  |
| [**column-zipper**](pkg-zipper/column-zipper)    | Zipper & mutazip for column in matrix   | zipper  |
| [**columns-zipper**](pkg-zipper/columns-zipper)  | Zipper & mutazip for columns in matrix  | zipper  |
| [**entries-zipper**](pkg-zipper/entries-zipper)  | Zipper & mutazip for entries            | zipper  |
| [**object-zipper**](pkg-zipper/object-zipper)    | Zipper & mutazip for object             | zipper  |
| [**callable**](pkg-util/callable)                | Create a callable class                 | misc    |
|                                                  |                                         |         |

## Meta
[LICENSE (MIT)](LICENSE)

Copyright (c) 2019-present, Haoyang (Vincent) Wang

[//]: <> (Shields)
[npm-image]: https://img.shields.io/npm/v/vect.svg?style=flat-square
[quality-image]: http://npm.packagequality.com/shield/vect.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/vect.svg?style=flat-square
[total-download-image]:https://img.shields.io/npm/dt/vect.svg?style=flat-square
[license-image]: https://img.shields.io/npm/l/vect.svg?style=flat-square
[commit-image]: https://img.shields.io/github/commit-activity/y/hoyeungw/vect?style=flat-square

[//]: <> (Link)
[npm-url]: https://npmjs.org/package/vect
[quality-url]: http://packagequality.com/#?package=vect
[github-url]: https://github.com/hoyeungw/vect
