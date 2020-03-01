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

## Use

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

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## Related

*   [`hast-util-is-element`](https://github.com/syntax-tree/hast-util-is-element)
    — check if a node is a (certain) element
*   [`hast-util-has-property`](https://github.com/syntax-tree/hast-util-has-property)
    — check if a node has a property
*   [`hast-util-is-body-ok-link`](https://github.com/rehypejs/rehype-minify/tree/master/packages/hast-util-is-body-ok-link)
    — check if a node is “Body OK” link element
*   [`hast-util-is-conditional-comment`](https://github.com/rehypejs/rehype-minify/tree/master/packages/hast-util-is-conditional-comment)
    — check if a node is a conditional comment
*   [`hast-util-is-css-link`](https://github.com/rehypejs/rehype-minify/tree/master/packages/hast-util-is-css-link)
    — check if a node is a CSS link element
*   [`hast-util-is-css-style`](https://github.com/rehypejs/rehype-minify/tree/master/packages/hast-util-is-css-style)
    — check if a node is a CSS style element
*   [`hast-util-embedded`](https://github.com/syntax-tree/hast-util-embedded)
    — check if a node is an embedded element
*   [`hast-util-heading`](https://github.com/syntax-tree/hast-util-heading)
    — check if a node is a heading element
*   [`hast-util-interactive`](https://github.com/syntax-tree/hast-util-interactive)
    — check if a node is interactive
*   [`hast-util-is-javascript`](https://github.com/rehypejs/rehype-minify/tree/master/packages/hast-util-is-javascript)
    — check if a node is a JavaScript script element
*   [`hast-util-labelable`](https://github.com/syntax-tree/hast-util-labelable)
    — check whether a node is labelable
*   [`hast-util-phrasing`](https://github.com/syntax-tree/hast-util-phrasing)
    — check if a node is phrasing content
*   [`hast-util-script-supporting`](https://github.com/syntax-tree/hast-util-script-supporting)
    — check if a node is a script-supporting element
*   [`hast-util-transparent`](https://github.com/syntax-tree/hast-util-transparent)
    — check if a node is a transparent element
*   [`hast-util-whitespace`](https://github.com/syntax-tree/hast-util-whitespace)
    — check if a node is inter-element whitespace

## Security

`hast-util-sectioning` does not change the syntax tree so there are no openings
for [cross-site scripting (XSS)][xss] attacks.

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

[chat-badge]: https://img.shields.io/badge/chat-spectrum-7b16ff.svg

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

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
