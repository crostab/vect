<div style="text-align:center">
	<img src="media/logo.default.png" />
</div>

##### :clubs: @vect, easy to use array, 2d-array, entries and objects

[![npm version][badge-npm-version]][url-npm]
[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]
[![npm license][badge-npm-license]][url-npm]

[//]: <> (Shields)
[badge-npm-version]: https://flat.badgen.net/npm/v/@vect/vector
[badge-npm-license]: https://flat.badgen.net/npm/license/@vect/vector
[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/vect
[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/vect

[//]: <> (Link)
[url-github]: https://github.com/hoyeungw/vect
[url-npm]: https://npmjs.org/package/@vect/vector

#### Features
- Decoupled modules. Submodules installable on need.
- Identical interface shared in mappers, in zippers or in quantifiers.
- 2d-array/entries as a data-type.
- Quick initializing arrays and object.
- Mutate mappers/margins/zippers supported.
- Lightweight and fast.
- ES-module support.

#### Install

```console
$ npm install @vect/<tool-name>
```

#### Tools
|                                                            |                                    |            |                       |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |---------------------- |
| [**vector**](packages/pkg-core/vector)                     | Functions for 1d-array(vector)     | core       |![v][vector-dm]        |
| [**matrix**](packages/pkg-core/matrix)                     | Functions for 2d-array(matrix)     | core       |![v][matrix-dm]        |
| [**column**](packages/pkg-core/column)                     | Functions for matrix column        | core       |![v][column-dm]        |
| [**entries**](packages/pkg-core/entries)                   | Functions for entries              | core       |![v][entries-dm]       |
|                                                            |                                    |            |                       |

[//]: <> (Local routes)
[vector-dm]: https://flat.badgen.net/npm/dm/@vect/vector
[matrix-dm]: https://flat.badgen.net/npm/dm/@vect/matrix
[column-dm]: https://flat.badgen.net/npm/dm/@vect/column
[entries-dm]: https://flat.badgen.net/npm/dm/@vect/entries

#### Mappers
|                                                            |                                    |            |                       |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |---------------------- |
| [**vector-mapper**](packages/pkg-mapper/vector-mapper)     | Mapper/iterate for vector          | mapper     |![v][vector-mapper-dm] |
| [**matrix-mapper**](packages/pkg-mapper/matrix-mapper)     | Mapper/iterate for matrix elements | mapper     |![v][matrix-mapper-dm] |
| [**column-mapper**](packages/pkg-mapper/column-mapper)     | Mapper/iterate for matrix column   | mapper     |![v][column-mapper-dm] |
| [**columns-mapper**](packages/pkg-mapper/columns-mapper)   | Mapper/iterate for matrix columns  | mapper     |![v][columns-mapper-dm]|
| [**entries-mapper**](packages/pkg-mapper/entries-mapper)   | Mapper/iterate for entries         | mapper     |![v][entries-mapper-dm]|
| [**object-mapper**](packages/pkg-mapper/object-mapper)     | Mapper/iterate for object          | mapper     |![v][object-mapper-dm] |
|                                                            |                                    |            |                       |

[//]: <> (Local routes)
[vector-mapper-dm]: https://flat.badgen.net/npm/dm/@vect/vector-mapper
[matrix-mapper-dm]: https://flat.badgen.net/npm/dm/@vect/matrix-mapper
[column-mapper-dm]: https://flat.badgen.net/npm/dm/@vect/column-mapper
[columns-mapper-dm]: https://flat.badgen.net/npm/dm/@vect/columns-mapper
[entries-mapper-dm]: https://flat.badgen.net/npm/dm/@vect/entries-mapper
[object-mapper-dm]: https://flat.badgen.net/npm/dm/@vect/object-mapper

#### Zippers
|                                                            |                                    |            |                       |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |---------------------- |
| [**vector-zipper**](packages/pkg-zipper/vector-zipper)     | Zipper for vector                  | zipper     |![v][vector-zipper-dm] |
| [**matrix-zipper**](packages/pkg-zipper/matrix-zipper)     | Zipper for matrix elements         | zipper     |![v][matrix-zipper-dm] |
| [**column-zipper**](packages/pkg-zipper/column-zipper)     | Zipper for matrix column           | zipper     |![v][column-zipper-dm] |
| [**columns-zipper**](packages/pkg-zipper/columns-zipper)   | Zipper for matrix columns          | zipper     |![v][columns-zipper-dm]|
| [**entries-zipper**](packages/pkg-zipper/entries-zipper)   | Zipper for entries                 | zipper     |![v][entries-zipper-dm]|
| [**object-zipper**](packages/pkg-zipper/object-zipper)     | Zipper for object                  | zipper     |![v][object-zipper-dm] |
|                                                            |                                    |            |                       |

[//]: <> (Local routes)
[vector-zipper-dm]: https://flat.badgen.net/npm/dm/@vect/vector-zipper
[matrix-zipper-dm]: https://flat.badgen.net/npm/dm/@vect/matrix-zipper
[column-zipper-dm]: https://flat.badgen.net/npm/dm/@vect/column-zipper
[columns-zipper-dm]: https://flat.badgen.net/npm/dm/@vect/columns-zipper
[entries-zipper-dm]: https://flat.badgen.net/npm/dm/@vect/entries-zipper
[object-zipper-dm]: https://flat.badgen.net/npm/dm/@vect/object-zipper

#### Indicators
|                                                                     |                                  |            |                          |
| ------------------------------------------------------------------- | -------------------------------- | ---------- |------------------------- |
| [**vector-maxIndicator**](packages/pkg-maxIndicator/vector-maxIndicator)     | Max & min for vector             | maxIndicator  |![v][vector-maxIndicator-dm] |
| [**matrix-maxIndicator**](packages/pkg-maxIndicator/matrix-maxIndicator)     | Max & min for matrix elements    | maxIndicator  |![v][matrix-maxIndicator-dm] |
| [**column-maxIndicator**](packages/pkg-maxIndicator/column-maxIndicator)     | Max & min for matrix column      | maxIndicator  |![v][column-maxIndicator-dm] |
| [**columns-maxIndicator**](packages/pkg-maxIndicator/columns-maxIndicator)   | Max & min for matrix columns     | maxIndicator  |![v][columns-maxIndicator-dm]|
| [**entries-maxIndicator**](packages/pkg-maxIndicator/entries-maxIndicator)   | Max & min for entries            | maxIndicator  |![v][entries-maxIndicator-dm]|
|                                                                     |                                  |            |                          |

[//]: <> (Local routes)
[vector-maxIndicator-dm]: https://flat.badgen.net/npm/dm/@vect/vector-maxIndicator
[matrix-maxIndicator-dm]: https://flat.badgen.net/npm/dm/@vect/matrix-maxIndicator
[column-maxIndicator-dm]: https://flat.badgen.net/npm/dm/@vect/column-maxIndicator
[columns-maxIndicator-dm]: https://flat.badgen.net/npm/dm/@vect/columns-maxIndicator
[entries-maxIndicator-dm]: https://flat.badgen.net/npm/dm/@vect/entries-maxIndicator

#### Select
|                                                            |                                    |            |                       |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |---------------------- |
| [**vector-select**](packages/pkg-select/vector-select)     | Select vector by index list        | select     |![v][vector-select-dm] |
| [**object-select**](packages/pkg-select/object-select)     | Select object by key list          | select     |![v][object-select-dm] |
| [**columns-select**](packages/pkg-select/columns-select)   | Select columns by column indexes   | select     |![v][columns-select-dm]|
|                                                            |                                    |            |                       |

[//]: <> (Local routes)
[vector-select-dm]: https://flat.badgen.net/npm/dm/@vect/vector-select
[object-select-dm]: https://flat.badgen.net/npm/dm/@vect/object-select
[columns-select-dm]: https://flat.badgen.net/npm/dm/@vect/columns-select

#### Update
|                                                            |                                    |            |                       |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |---------------------- |
| [**vector-update**](packages/pkg-update/vector-update)     | Splices vector by index list       | update     |![v][vector-update-dm] |
| [**columns-update**](packages/pkg-update/columns-update)   | Pop/push/(un)shift/splices columns | update     |![v][columns-update-dm]|
|                                                            |                                    |            |                       |

[//]: <> (Local routes)
[vector-update-dm]: https://flat.badgen.net/npm/dm/@vect/vector-update
[columns-update-dm]: https://flat.badgen.net/npm/dm/@vect/columns-update

#### Margins
|                                                            |                                    |            |                       |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |---------------------- |
| [**vector-margin**](packages/pkg-margin/vector-margin)     | Margin for vector                  | margin     |![v][vector-margin-dm] |
| [**matrix-margin**](packages/pkg-margin/matrix-margin)     | Margin for matrix                  | margin     |![v][matrix-margin-dm] |
| [**entries-margin**](packages/pkg-margin/entries-margin)   | Margin for entries                 | margin     |![v][entries-margin-dm]|
|                                                            |                                    |            |                       |

[//]: <> (Local routes)
[vector-margin-dm]: https://flat.badgen.net/npm/dm/@vect/vector-margin
[matrix-margin-dm]: https://flat.badgen.net/npm/dm/@vect/matrix-margin
[entries-margin-dm]: https://flat.badgen.net/npm/dm/@vect/entries-margin

#### Quantifiers
|                                                                     |                                  |            |                           |
| ------------------------------------------------------------------- | -------------------------------- | ---------- |-------------------------- |
| [**matrix-quantifier**](packages/pkg-quantifier/matrix-quantifier)  | Every & some for matrix elements | quantifier |![v][matrix-quantifier-dm] |
| [**column-quantifier**](packages/pkg-quantifier/column-quantifier)  | Every & some for matrix column   | quantifier |![v][column-quantifier-dm] |
|                                                                     |                                  |            |                           |

[//]: <> (Local routes)
[matrix-quantifier-dm]: https://flat.badgen.net/npm/dm/@vect/matrix-quantifier
[column-quantifier-dm]: https://flat.badgen.net/npm/dm/@vect/column-quantifier

#### Misc
|                                                            |                                    |            |                       |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |---------------------- |
| [**callable**](packages/pkg-util/callable)                 | Create a callable class            | misc       |![v][callable-dm] |
|                                                            |                                    |            |                       |

[//]: <> (Local routes)
[callable-dm]: https://flat.badgen.net/npm/dm/@vect/vector-mapper

#### Meta
[LICENSE (MIT)](LICENSE)
