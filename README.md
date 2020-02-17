<div style="text-align:center">
	<img src="media/logo.default.png" />
</div>

##### :clubs: @vect, easy to use array, 2d-array, entries and objects

[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]

[//]: <> (Shields)
[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/vect
[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/vect

[//]: <> (Link)
[url-github]: https://github.com/hoyeungw/vect

## Features

- Decoupled modules. Submodules installable on need.
- Identical interface shared in mappers, in zippers or in quantifiers.
- Mutate mappers/zippers supported.
- Lightweight and fast.
- ES-module support.

## Install

```console
$ npm install @vect/<tool-name>
```

## Tools

|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**vector**](pkg-core/vector)                              | Functions for 1d-array(vector)     | core       |
| [**matrix**](pkg-core/matrix)                              | Functions for 2d-array(matrix)     | core       |
| [**column**](pkg-core/column)                              | Functions for matrix column        | core       |
| [**vector-mapper**](pkg-mapper/vector-mapper)              | Mapper for vector                  | fn     |
| [**matrix-mapper**](pkg-mapper/matrix-mapper)              | Mapper for matrix elements         | fn     |
| [**column-mapper**](pkg-mapper/column-mapper)              | Mapper for matrix column           | fn     |
| [**columns-mapper**](pkg-mapper/columns-mapper)            | Mapper for matrix columns          | fn     |
| [**entries-mapper**](pkg-mapper/entries-mapper)            | Mapper for entries                 | fn     |
| [**object-mapper**](pkg-mapper/object-mapper)              | Mapper for object                  | fn     |
| [**vector-zipper**](pkg-zipper/vector-zipper)              | Zipper for vector                  | fn     |
| [**matrix-zipper**](pkg-zipper/matrix-zipper)              | Zipper for matrix elements         | fn     |
| [**column-zipper**](pkg-zipper/column-zipper)              | Zipper for matrix column           | fn     |
| [**columns-zipper**](pkg-zipper/columns-zipper)            | Zipper for matrix columns          | fn     |
| [**entries-zipper**](pkg-zipper/entries-zipper)            | Zipper for entries                 | fn     |
| [**object-zipper**](pkg-zipper/object-zipper)              | Zipper for object                  | fn     |
| [**matrix-quantifier**](pkg-quantifier/matrix-quantifier)  | Every & some for matrix elements   | quantifier |
| [**column-quantifier**](pkg-quantifier/column-quantifier)  | Every & some for matrix column     | quantifier |
| [**callable**](pkg-util/callable)                          | Create a callable class            | misc       |
|                                                            |                                    |            |

## Meta
[LICENSE (MIT)](LICENSE)
