import React from 'react'

const FullImage = (props) => {
  const { src, style, onLoad } = props
  return (
    <div style={style}>
      <img src={src} style={style} onLoad={onLoad} />
    </div>
  )
}

FullImage.propTypes = {
  src: React.PropTypes.string,
  style: React.PropTypes.object,
  onload: React.PropTypes.func
 };

export default FullImage
