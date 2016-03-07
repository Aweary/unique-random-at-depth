# unique-random-at-depth [![Build Status](https://travis-ci.org/Aweary/unique-random-at-depth.svg?branch=master)](https://travis-ci.org/Aweary/unique-random-at-depth)

> Generate random numbers that are consecutively unique relative to a provided call depth.

Useful for things like slideshows where you don't want to have the same slide `n` times in a row. Based on [unique-random](https://github.com/sindresorhus/unique-random)


## Install

```
$ npm install --save unique-random-at-depth
```


## Usage

```js
var uniqueRandom = require('unique-random-at-depth');
var rand = uniqueRandom(1, 10, 3);

console.log(rand(), rand(), rand());
//=> 5 2 6
```


## API

### uniqueRandomAtDepth(min, max, [depth])

Returns a function that when called will return a random number that's never the same as the previous. If `depth` is provided it will ensure that the random is unique relative to the last n results. So if you pass in `5` it will ensure that
the return value is unique relative to the last 5 results.


## Related

- [unique-random](https://github.com/sindresorhus/unique-random) - Source repository. Provides the same functionality without the depth option.
- [unique-random-array](https://github.com/sindresorhus/unique-random-array) - Get consecutively unique elements from an array
- [random-int](https://github.com/sindresorhus/random-int) - Generate a random integer
- [random-float](https://github.com/sindresorhus/random-float) - Generate a random float
- [random-item](https://github.com/sindresorhus/random-item) - Get a random item from an array
- [random-obj-key](https://github.com/sindresorhus/random-obj-key) - Get a random key from an object
- [random-obj-prop](https://github.com/sindresorhus/random-obj-prop) - Get a random property from an object


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
MIT © Brandon Dail
