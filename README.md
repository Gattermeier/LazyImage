# LazyImage    
A React Component for Progressive Image Loading.   

[![Build Status](https://travis-ci.org/Gattermeier/LazyImage.svg?branch=master)](https://travis-ci.org/Gattermeier/LazyImage)
[![npm version](https://badge.fury.io/js/hapi-ff.svg)](https://badge.fury.io/js/hapi-ff)
[![Dependency Status](https://david-dm.org/gattermeier/lazyimage.svg)](https://david-dm.org/Gattermeier/lazyimage)
[![devDependency Status](https://david-dm.org/Gattermeier/lazyimage/dev-status.svg)](https://david-dm.org/Gattermeier/lazyimage#info=devDependencies)


LazyImage loads a low res version of an image blurred before replacing it with large, high-res image after it was loaded completely.   
Inspired by a blog article on Medium's progressive image loading by José Manuel Pérez: https://jmperezperez.com/medium-image-progressive-loading-placeholder/

## Usage   
```
<LazyImage
  blurRadius="10"
  width="600"
  height="190"
  src="/path/to/very/large/image"
  small="/path/to/low/quality/image" />
```

## Tests
Uses Lab, Code, Enzyme for unit testing the React component. 
Run with:

`npm test`
