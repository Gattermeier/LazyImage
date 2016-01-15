# LazyImage
A React Component for Progressive Image Loading.   
Loads a low res version of an image blurred before replacing it with large, high-res image after it was loaded completely.   
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
