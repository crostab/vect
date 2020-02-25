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

#### Features
    "pkg-indicator/*",
    "pkg-init/*",
    "pkg-mapper/*",
    "pkg-margin/*",
    "pkg-quantifier/*",
    "pkg-select/*",
    "pkg-update/*",
    "pkg-util/*",
    "pkg-zipper/*"
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
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**vector**](packages/pkg-core/vector)                              | Functions for 1d-array(vector)     | core       |
| [**matrix**](packages/pkg-core/matrix)                              | Functions for 2d-array(matrix)     | core       |
| [**column**](packages/pkg-core/column)                              | Functions for matrix column        | core       |
| [**entries**](packages/pkg-core/entries)                            | Functions for entries              | core       |
|                                                            |                                    |            |

#### Mappers
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**vector-mapper**](packages/pkg-mapper/vector-mapper)              | Mapper/iterate for vector          | mapper     |
| [**matrix-mapper**](packages/pkg-mapper/matrix-mapper)              | Mapper/iterate for matrix elements | mapper     |
| [**column-mapper**](packages/pkg-mapper/column-mapper)              | Mapper/iterate for matrix column   | mapper     |
| [**columns-mapper**](packages/pkg-mapper/columns-mapper)            | Mapper/iterate for matrix columns  | mapper     |
| [**entries-mapper**](packages/pkg-mapper/entries-mapper)            | Mapper/iterate for entries         | mapper     |
| [**object-mapper**](packages/pkg-mapper/object-mapper)              | Mapper/iterate for object          | mapper     |
|                                                            |                                    |            |

#### Zippers
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**vector-zipper**](packages/pkg-zipper/vector-zipper)              | Zipper for vector                  | zipper     |
| [**matrix-zipper**](packages/pkg-zipper/matrix-zipper)              | Zipper for matrix elements         | zipper     |
| [**column-zipper**](packages/pkg-zipper/column-zipper)              | Zipper for matrix column           | zipper     |
| [**columns-zipper**](packages/pkg-zipper/columns-zipper)            | Zipper for matrix columns          | zipper     |
| [**entries-zipper**](packages/pkg-zipper/entries-zipper)            | Zipper for entries                 | zipper     |
| [**object-zipper**](packages/pkg-zipper/object-zipper)              | Zipper for object                  | zipper     |
|                                                            |                                    |            |

#### Indicators
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**vector-indicator**](packages/pkg-indicator/vector-indicator)     | Max & min for vector               | indicator  |
| [**matrix-indicator**](packages/pkg-indicator/matrix-indicator)     | Max & min for matrix elements      | indicator  |
| [**column-indicator**](packages/pkg-indicator/column-indicator)     | Max & min for matrix column        | indicator  |
| [**columns-indicator**](packages/pkg-indicator/columns-indicator)   | Max & min for matrix columns       | indicator  |
| [**entries-indicator**](packages/pkg-indicator/entries-indicator)   | Max & min for entries              | indicator  |
|                                                            |                                    |            |

#### Select
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**vector-select**](packages/pkg-select/vector-select)              | Select vector by index list        | select     |
| [**object-select**](packages/pkg-select/object-select)              | Select object by key list          | select     |
| [**columns-select**](packages/pkg-select/columns-select)            | Select columns by column indexes   | select     |
|                                                            |                                    |            |

#### Update
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**vector-update**](packages/pkg-update/vector-update)              | Splices vector by index list       | update     |
| [**columns-update**](packages/pkg-update/columns-update)            | Pop/push/(un)shift/splices columns | update     |
|                                                            |                                    |            |

#### Margins
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**vector-margin**](packages/pkg-margin/vector-margin)              | Margin for vector                  | margin     |
| [**matrix-margin**](packages/pkg-margin/matrix-margin)              | Margin for matrix                  | margin     |
| [**entries-margin**](packages/pkg-margin/entries-margin)            | Margin for entries                 | margin     |
|                                                            |                                    |            |

#### Quantifiers
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**matrix-quantifier**](packages/pkg-quantifier/matrix-quantifier)  | Every & some for matrix elements   | quantifier |
| [**column-quantifier**](packages/pkg-quantifier/column-quantifier)  | Every & some for matrix column     | quantifier |
|                                                            |                                    |            |

#### Misc
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**callable**](packages/pkg-util/callable)                          | Create a callable class            | misc       |
|                                                            |                                    |            |

#### Meta
[LICENSE (MIT)](LICENSE)
