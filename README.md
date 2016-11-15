# LazyImage    
A React Component for Progressive Image Loading.   

[![Build Status](https://travis-ci.org/Gattermeier/LazyImage.svg?branch=master)](https://travis-ci.org/Gattermeier/LazyImage)
[![npm version](https://badge.fury.io/js/hapi-ff.svg)](https://badge.fury.io/js/hapi-ff)
[![Dependency Status](https://david-dm.org/gattermeier/lazyimage.svg)](https://david-dm.org/Gattermeier/lazyimage)
[![devDependency Status](https://david-dm.org/Gattermeier/lazyimage/dev-status.svg)](https://david-dm.org/Gattermeier/lazyimage#info=devDependencies)


LazyImage loads a low-res version of an image blurred before replacing it with a larger, higher-res image after it was loaded completely. Inspired by a blog article on Medium's progressive image loading by José Manuel Pérez: https://jmperezperez.com/medium-image-progressive-loading-placeholder/

## Install via npm    
`npm i --save lazyimage`    

## Usage
```javascript
import LazyImage from 'lazyimage'

...     

<LazyImage
  blurRadius="10"
  width="600"
  height="190"
  src="/path/to/very/large/image"
  low="/path/to/low/quality/image"
/>
```

## Features    
* If no `low`-resolution source is provided a regular image is rendered.
* `blurRadius` defaults to `10`


## Tests
Uses [Lab](https://github.com/hapijs/lab), [Code](https://github.com/hapijs/code), [Enzyme](https://github.com/airbnb/enzyme) for unit tests. If you want to know more about React unit testing using Lab instead of Mocha or Tape read the [blog post on Medium](https://medium.com/@gattermeier/react-unit-testing-with-enzyme-lab-and-code-24dad077f6d4#.3lawhddx2)

Run tests with:

`npm test`
