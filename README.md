# scream-stream

convert contents of a stream to uppercase.
potentially useful for tests n whatever.

scream yr h\*ckin lungs out!

[Install](#install) - [Usage](#usage) - [License: Apache-2.0](#license)

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/scream-stream.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/scream-stream
[travis-image]: https://img.shields.io/travis/goto-bus-stop/scream-stream.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/scream-stream
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install scream-stream
```

## Usage

```js
var scream = require('scream-stream')

someStream
  .pipe(scream())
  .pipe(elsewhere)
```

## License

[Apache-2.0](LICENSE.md)
