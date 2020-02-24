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
| [**vector**](pkg-core/vector)                              | Functions for 1d-array(vector)     | core       |
| [**matrix**](pkg-core/matrix)                              | Functions for 2d-array(matrix)     | core       |
| [**column**](pkg-core/column)                              | Functions for matrix column        | core       |
| [**entries**](pkg-core/entries)                            | Functions for entries              | core       |
|                                                            |                                    |            |

#### Mappers
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**vector-mapper**](pkg-mapper/vector-mapper)              | Mapper for vector                  | mapper     |
| [**matrix-mapper**](pkg-mapper/matrix-mapper)              | Mapper for matrix elements         | mapper     |
| [**column-mapper**](pkg-mapper/column-mapper)              | Mapper for matrix column           | mapper     |
| [**columns-mapper**](pkg-mapper/columns-mapper)            | Mapper for matrix columns          | mapper     |
| [**entries-mapper**](pkg-mapper/entries-mapper)            | Mapper for entries                 | mapper     |
| [**object-mapper**](pkg-mapper/object-mapper)              | Mapper for object                  | mapper     |
|                                                            |                                    |            |

#### Zippers
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**vector-zipper**](pkg-zipper/vector-zipper)              | Zipper for vector                  | zipper     |
| [**matrix-zipper**](pkg-zipper/matrix-zipper)              | Zipper for matrix elements         | zipper     |
| [**column-zipper**](pkg-zipper/column-zipper)              | Zipper for matrix column           | zipper     |
| [**columns-zipper**](pkg-zipper/columns-zipper)            | Zipper for matrix columns          | zipper     |
| [**entries-zipper**](pkg-zipper/entries-zipper)            | Zipper for entries                 | zipper     |
| [**object-zipper**](pkg-zipper/object-zipper)              | Zipper for object                  | zipper     |
|                                                            |                                    |            |

#### Indicators
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**vector-indicator**](pkg-indicator/vector-indicator)     | Max & min for vector               | indicator  |
| [**matrix-indicator**](pkg-indicator/matrix-indicator)     | Max & min for matrix elements      | indicator  |
| [**column-indicator**](pkg-indicator/column-indicator)     | Max & min for matrix column        | indicator  |
| [**columns-indicator**](pkg-indicator/columns-indicator)   | Max & min for matrix columns       | indicator  |
| [**entries-indicator**](pkg-indicator/entries-indicator)   | Max & min for entries              | indicator  |
|                                                            |                                    |            |

#### Select
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**vector-select**](pkg-select/vector-select)              | Select vector by index list        | select     |
| [**object-select**](pkg-select/object-select)              | Select object by key list          | select     |
| [**columns-select**](pkg-select/columns-select)            | Select columns by column indexes   | select     |
|                                                            |                                    |            |

#### Update
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**vector-update**](pkg-update/vector-update)              | Splices vector by index list       | update     |
| [**columns-update**](pkg-update/columns-update)            | Pop/push/(un)shift/splices columns | update     |
|                                                            |                                    |            |

#### Margins
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**vector-margin**](pkg-margin/vector-margin)              | Margin for vector                  | margin     |
| [**matrix-margin**](pkg-margin/matrix-margin)              | Margin for matrix                  | margin     |
| [**entries-margin**](pkg-margin/entries-margin)            | Margin for entries                 | margin     |
|                                                            |                                    |            |

#### Quantifiers
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**matrix-quantifier**](pkg-quantifier/matrix-quantifier)  | Every & some for matrix elements   | quantifier |
| [**column-quantifier**](pkg-quantifier/column-quantifier)  | Every & some for matrix column     | quantifier |
|                                                            |                                    |            |

#### Misc
|                                                            |                                    |            |
| ---------------------------------------------------------- | ---------------------------------- | ---------- |
| [**callable**](pkg-util/callable)                          | Create a callable class            | misc       |
|                                                            |                                    |            |

#### Meta
[LICENSE (MIT)](LICENSE)
