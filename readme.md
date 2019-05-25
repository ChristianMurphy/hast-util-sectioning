# hast-util-sectioning

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**hast**][hast] utility to check if an [*element*][element] is
[*sectioning*][spec].

## Install

[npm][]:

```sh
npm install hast-util-sectioning
```

## Usage

```js
var sectioning = require('hast-util-sectioning')

sectioning({
  type: 'element',
  tagName: 'a',
  properties: {href: '#alpha', title: 'Bravo'},
  children: [{type: 'text', value: 'Charlie'}]
}) // => false

sectioning({
  type: 'element',
  tagName: 'article',
  children: [
    {
      type: 'element',
      tagName: 'p',
      children: [{type: 'text', value: 'Delta'}]
    }
  ]
}) // => true
```

## API

### `sectioning(node)`

Check if the given value is a [*sectioning*][spec] [*element*][element].

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-sectioning.svg

[build]: https://travis-ci.org/syntax-tree/hast-util-sectioning

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-sectioning.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-sectioning

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-sectioning.svg

[downloads]: https://www.npmjs.com/package/hast-util-sectioning

[size-badge]: https://img.shields.io/bundlephobia/minzip/hast-util-sectioning.svg

[size]: https://bundlephobia.com/result?p=hast-util-sectioning

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/master/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/master/support.md

[coc]: https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md

[hast]: https://github.com/syntax-tree/hast

[element]: https://github.com/syntax-tree/hast#element

[spec]: https://html.spec.whatwg.org/#sectioning-content
