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
| [**vector-fn**](pkg-fn/vector-fn)              | Mapper for vector                  | fn     |
| [**matrix-fn**](pkg-fn/matrix-fn)              | Mapper for matrix elements         | fn     |
| [**column-fn**](pkg-fn/column-fn)              | Mapper for matrix column           | fn     |
| [**columns-fn**](pkg-fn/columns-fn)            | Mapper for matrix columns          | fn     |
| [**entries-fn**](pkg-fn/entries-fn)            | Mapper for entries                 | fn     |
| [**object-fn**](pkg-fn/object-fn)              | Mapper for object                  | fn     |
| [**vector-fn**](pkg-fn/vector-fn)              | Zipper for vector                  | fn     |
| [**matrix-fn**](pkg-fn/matrix-fn)              | Zipper for matrix elements         | fn     |
| [**column-fn**](pkg-fn/column-fn)              | Zipper for matrix column           | fn     |
| [**columns-fn**](pkg-fn/columns-fn)            | Zipper for matrix columns          | fn     |
| [**entries-fn**](pkg-fn/entries-fn)            | Zipper for entries                 | fn     |
| [**object-fn**](pkg-fn/object-fn)              | Zipper for object                  | fn     |
| [**matrix-quantifier**](pkg-quantifier/matrix-quantifier)  | Every & some for matrix elements   | quantifier |
| [**column-quantifier**](pkg-quantifier/column-quantifier)  | Every & some for matrix column     | quantifier |
| [**callable**](pkg-util/callable)                          | Create a callable class            | misc       |
|                                                            |                                    |            |

## Meta
[LICENSE (MIT)](LICENSE)
