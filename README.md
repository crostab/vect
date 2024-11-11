<div style="text-align:center">
	<img alt="banner" src="./media/vect-banner.svg"/>
    <p style="text-align:center">functionalities for vector</p>
</div>

#### vector / matrix / columns / entries / object / nested

#### indexed / mapper / iterate / mutate / select / zipper

[![version](https://img.shields.io/npm/v/@vect/math?logo=npm&style=flat-square)]()
[![language](https://img.shields.io/github/languages/top/crostab/vect?logo=javascript&style=flat-square)][url-github]
[![manager](https://img.shields.io/badge/manager-pnpm-F69220?logo=pnpm&logoColor=EEE&style=flat-square)][url-github]
[![npm last update](https://img.shields.io/npm/last-update/%40vect%2Fvector?logo=npm&style=flat-square)]()
[![github last commit](https://img.shields.io/github/last-commit/crostab/vect?logo=github&style=flat-square)][url-github]
[![github commits](https://img.shields.io/github/commit-activity/t/crostab/vect?logo=github&style=flat-square)][url-github]
[![node version](https://img.shields.io/node/v/@vect/vector/latest?logo=node.js&style=flat-square)]()

[//]: <> (Link)

[url-github]: https://github.com/hoyeungw/vect

[url-npm]: https://npmjs.org/package/@vect/vector

#### Features

- Extend functions for object, array, 2d-array, entries, and nested object.
- Modularized & install on demand.
- Lightweight.
- Support both ESM and CJS module.

#### Install

```console
$ npm install @vect/<tool-name>
```

#### Tools

Consolidated functions

|                                      |                                |      |                  |
|--------------------------------------|--------------------------------|------|------------------|
| [**vector**](packages/core/vector)   | Functions for 1d-array(vector) | core | ![v][vector-dm]  |
| [**matrix**](packages/core/matrix)   | Functions for 2d-array(matrix) | core | ![v][matrix-dm]  |
| [**column**](packages/core/column)   | Functions for matrix column    | core | ![v][column-dm]  |
| [**entries**](packages/core/entries) | Functions for entries          | core | ![v][entries-dm] |
| [**object**](packages/core/object)   | Functions for object           | core | ![v][object-dm]  |
| [**nested**](packages/core/column)   | Functions for nested object    | core | ![v][nested-dm]  |
|                                      |                                |      |                  |

[//]: <> (Local routes)

[vector-dm]: https://flat.badgen.net/npm/dm/@vect/vector

[matrix-dm]: https://flat.badgen.net/npm/dm/@vect/matrix

[column-dm]: https://flat.badgen.net/npm/dm/@vect/column

[entries-dm]: https://flat.badgen.net/npm/dm/@vect/entries

[object-dm]: https://flat.badgen.net/npm/dm/@vect/object

[nested-dm]: https://flat.badgen.net/npm/dm/@vect/nested

#### Constructs

Functions to create new instances

|                                                     |                   |      |                       |
|-----------------------------------------------------|-------------------|------|-----------------------|
| [**vector-init**](packages/construct/vector-init)   | Construct vector  | init | ![v][vector-init-dm]  |
| [**matrix-init**](packages/construct/matrix-init)   | Construct matrix  | init | ![v][matrix-init-dm]  |
| [**entries-init**](packages/construct/entries-init) | Construct entries | init | ![v][entries-init-dm] |
| [**object-init**](packages/construct/object-init)   | Construct object  | init | ![v][object-init-dm]  |
|                                                     |                   |      |                       |

[//]: <> (Local routes)

[vector-init-dm]: https://flat.badgen.net/npm/dm/@vect/vector-init

[matrix-init-dm]: https://flat.badgen.net/npm/dm/@vect/matrix-init

[entries-init-dm]: https://flat.badgen.net/npm/dm/@vect/entries-init

[object-init-dm]: https://flat.badgen.net/npm/dm/@vect/object-init

#### Algebra

Algebra space for array and 2d-array

|                                                       |                          |         |                         |
|-------------------------------------------------------|--------------------------|---------|-------------------------|
| [**vector-algebra**](packages/algebra/vector-algebra) | algebra space for vector | algebra | ![v][vector-algebra-dm] |
| [**matrix-algebra**](packages/algebra/matrix-algebra) | algebra space for matrix | algebra | ![v][matrix-algebra-dm] |
|                                                       |                          |         |                         |

[//]: <> (Local routes)

[vector-algebra-dm]: https://flat.badgen.net/npm/dm/@vect/vector-algebra

[matrix-algebra-dm]: https://flat.badgen.net/npm/dm/@vect/matrix-algebra

#### Index

Element operation for array, 2d-array and object
| | | | |
|----------------------------------------------------------|--------------------------|------|------------------------|
| [**vector-index**](packages/index/vector-index)    | element operation for vector | index | ![v][vector-index-dm]   |
| [**matrix-index**](packages/index/matrix-index)    | element operation for matrix | index | ![v][matrix-index-dm]   |
| [**object-index**](packages/index/object-index)    | element operation for object | index | ![v][object-index-dm]   |
| | | | |

[//]: <> (Local routes)

[vector-index-dm]: https://flat.badgen.net/npm/dm/@vect/vector-index

[matrix-index-dm]: https://flat.badgen.net/npm/dm/@vect/matrix-index

[object-index-dm]: https://flat.badgen.net/npm/dm/@vect/object-index

#### Mappers

Iterator or mapping functions

|                                                      |                                    |        |                         |
|------------------------------------------------------|------------------------------------|--------|-------------------------|
| [**vector-mapper**](packages/mapper/vector-mapper)   | Mapper/iterate for vector          | mapper | ![v][vector-mapper-dm]  |
| [**matrix-mapper**](packages/mapper/matrix-mapper)   | Mapper/iterate for matrix elements | mapper | ![v][matrix-mapper-dm]  |
| [**column-mapper**](packages/mapper/column-mapper)   | Mapper/iterate for matrix column   | mapper | ![v][column-mapper-dm]  |
| [**columns-mapper**](packages/mapper/columns-mapper) | Mapper/iterate for matrix columns  | mapper | ![v][columns-mapper-dm] |
| [**entries-mapper**](packages/mapper/entries-mapper) | Mapper/iterate for entries         | mapper | ![v][entries-mapper-dm] |
| [**object-mapper**](packages/mapper/object-mapper)   | Mapper/iterate for object          | mapper | ![v][object-mapper-dm]  |
|                                                      |                                    |        |                         |

[//]: <> (Local routes)

[vector-mapper-dm]: https://flat.badgen.net/npm/dm/@vect/vector-mapper

[matrix-mapper-dm]: https://flat.badgen.net/npm/dm/@vect/matrix-mapper

[column-mapper-dm]: https://flat.badgen.net/npm/dm/@vect/column-mapper

[columns-mapper-dm]: https://flat.badgen.net/npm/dm/@vect/columns-mapper

[entries-mapper-dm]: https://flat.badgen.net/npm/dm/@vect/entries-mapper

[object-mapper-dm]: https://flat.badgen.net/npm/dm/@vect/object-mapper

#### Zippers

|                                                      |                            |        |                         |
|------------------------------------------------------|----------------------------|--------|-------------------------|
| [**vector-zipper**](packages/zipper/vector-zipper)   | Zipper for vector          | zipper | ![v][vector-zipper-dm]  |
| [**matrix-zipper**](packages/zipper/matrix-zipper)   | Zipper for matrix elements | zipper | ![v][matrix-zipper-dm]  |
| [**column-zipper**](packages/zipper/column-zipper)   | Zipper for matrix column   | zipper | ![v][column-zipper-dm]  |
| [**columns-zipper**](packages/zipper/columns-zipper) | Zipper for matrix columns  | zipper | ![v][columns-zipper-dm] |
| [**entries-zipper**](packages/zipper/entries-zipper) | Zipper for entries         | zipper | ![v][entries-zipper-dm] |
| [**object-zipper**](packages/zipper/object-zipper)   | Zipper for object          | zipper | ![v][object-zipper-dm]  |
|                                                      |                            |        |                         |

[//]: <> (Local routes)

[vector-zipper-dm]: https://flat.badgen.net/npm/dm/@vect/vector-zipper

[matrix-zipper-dm]: https://flat.badgen.net/npm/dm/@vect/matrix-zipper

[column-zipper-dm]: https://flat.badgen.net/npm/dm/@vect/column-zipper

[columns-zipper-dm]: https://flat.badgen.net/npm/dm/@vect/columns-zipper

[entries-zipper-dm]: https://flat.badgen.net/npm/dm/@vect/entries-zipper

[object-zipper-dm]: https://flat.badgen.net/npm/dm/@vect/object-zipper

#### Indicators [Deprecated]

|                                                              |                               |           |                            |
|--------------------------------------------------------------|-------------------------------|-----------|----------------------------|
| [**vector-indicator**](archive/indicator/vector-indicator)   | Indicator for vector          | indicator | ![v][vector-indicator-dm]  |
| [**matrix-indicator**](archive/indicator/matrix-indicator)   | Indicator for matrix elements | indicator | ![v][matrix-indicator-dm]  |
| [**column-indicator**](archive/indicator/column-indicator)   | Indicator for matrix column   | indicator | ![v][column-indicator-dm]  |
| [**columns-indicator**](archive/indicator/columns-indicator) | Indicator for matrix columns  | indicator | ![v][columns-indicator-dm] |
| [**entries-indicator**](archive/indicator/entries-indicator) | Indicator for entries         | indicator | ![v][entries-indicator-dm] |
|                                                              |                               |           |                            |

[//]: <> (Local routes)

[vector-indicator-dm]: https://flat.badgen.net/npm/dm/@vect/vector-indicator

[matrix-indicator-dm]: https://flat.badgen.net/npm/dm/@vect/matrix-indicator

[column-indicator-dm]: https://flat.badgen.net/npm/dm/@vect/column-indicator

[columns-indicator-dm]: https://flat.badgen.net/npm/dm/@vect/columns-indicator

[entries-indicator-dm]: https://flat.badgen.net/npm/dm/@vect/entries-indicator

#### Select

|                                                      |                                  |        |                         |
|------------------------------------------------------|----------------------------------|--------|-------------------------|
| [**vector-select**](packages/select/vector-select)   | Select vector by index list      | select | ![v][vector-select-dm]  |
| [**object-select**](packages/select/object-select)   | Select object by key list        | select | ![v][object-select-dm]  |
| [**columns-select**](packages/select/columns-select) | Select columns by column indexes | select | ![v][columns-select-dm] |
|                                                      |                                  |        |                         |

[//]: <> (Local routes)

[vector-select-dm]: https://flat.badgen.net/npm/dm/@vect/vector-select

[object-select-dm]: https://flat.badgen.net/npm/dm/@vect/object-select

[columns-select-dm]: https://flat.badgen.net/npm/dm/@vect/columns-select

#### Statistics

|                                                             |                                |            |                       |
|-------------------------------------------------------------|--------------------------------|------------|-----------------------|
| [**vector-stat**](archive/pkg-indicator/vector-indicator)   | Statistics for vector          | statistics | ![v][vector-stat-dm]  |
| [**matrix-stat**](archive/pkg-indicator/matrix-indicator)   | Statistics for matrix elements | statistics | ![v][matrix-stat-dm]  |
| [**column-stat**](archive/pkg-indicator/column-indicator)   | Statistics for matrix column   | statistics | ![v][column-stat-dm]  |
| [**columns-stat**](archive/pkg-indicator/columns-indicator) | Statistics for matrix columns  | statistics | ![v][columns-stat-dm] |
| [**entries-stat**](archive/pkg-indicator/entries-indicator) | Statistics for entries         | statistics | ![v][entries-stat-dm] |
|                                                             |                                |            |                       |

[//]: <> (Local routes)

[vector-stat-dm]: https://flat.badgen.net/npm/dm/@vect/vector-stat

[matrix-stat-dm]: https://flat.badgen.net/npm/dm/@vect/matrix-stat

[column-stat-dm]: https://flat.badgen.net/npm/dm/@vect/column-stat

[columns-stat-dm]: https://flat.badgen.net/npm/dm/@vect/columns-stat

[entries-stat-dm]: https://flat.badgen.net/npm/dm/@vect/entries-stat

#### Update

|                                                      |                                    |        |                         |
|------------------------------------------------------|------------------------------------|--------|-------------------------|
| [**vector-update**](packages/update/vector-update)   | Splices vector by index list       | update | ![v][vector-update-dm]  |
| [**columns-update**](packages/update/columns-update) | Pop/push/(un)shift/splices columns | update | ![v][columns-update-dm] |
|                                                      |                                    |        |                         |

[//]: <> (Local routes)

[vector-update-dm]: https://flat.badgen.net/npm/dm/@vect/vector-update

[columns-update-dm]: https://flat.badgen.net/npm/dm/@vect/columns-update

#### Margins [Deprecate]

|                                                         |                    |        |                         |
|---------------------------------------------------------|--------------------|--------|-------------------------|
| [**vector-margin**](archive/pkg-margin/vector-margin)   | Margin for vector  | margin | ![v][vector-margin-dm]  |
| [**matrix-margin**](archive/pkg-margin/matrix-margin)   | Margin for matrix  | margin | ![v][matrix-margin-dm]  |
| [**entries-margin**](archive/pkg-margin/entries-margin) | Margin for entries | margin | ![v][entries-margin-dm] |
|                                                         |                    |        |                         |

[//]: <> (Local routes)

[vector-margin-dm]: https://flat.badgen.net/npm/dm/@vect/vector-margin

[matrix-margin-dm]: https://flat.badgen.net/npm/dm/@vect/matrix-margin

[entries-margin-dm]: https://flat.badgen.net/npm/dm/@vect/entries-margin

#### Quantifiers

|                                                                   |                                  |            |                            |
|-------------------------------------------------------------------|----------------------------------|------------|----------------------------|
| [**matrix-quantifier**](archive/pkg-quantifier/matrix-quantifier) | Every & some for matrix elements | quantifier | ![v][matrix-quantifier-dm] |
| [**column-quantifier**](archive/pkg-quantifier/column-quantifier) | Every & some for matrix column   | quantifier | ![v][column-quantifier-dm] |
|                                                                   |                                  |            |                            |

[//]: <> (Local routes)

[matrix-quantifier-dm]: https://flat.badgen.net/npm/dm/@vect/matrix-quantifier

[column-quantifier-dm]: https://flat.badgen.net/npm/dm/@vect/column-quantifier

#### Misc [Deprecate]

|                                  |                         |      |                   |
|----------------------------------|-------------------------|------|-------------------|
| [**callable**](archive/callable) | Create a callable class | misc | ![v][callable-dm] |
|                                  |                         |      |                   |

[//]: <> (Local routes)

[callable-dm]: https://flat.badgen.net/npm/dm/@vect/vector-mapper

#### Meta

[LICENSE (MIT)](LICENSE)
