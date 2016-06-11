import React from 'react'

class FullImage extends React.Component {
  constructor() {
    super()
  }
  render() {
    const {src, style, onLoad} = this.props
    return (
      <div style={style}>
        <img src={src} style={style} onLoad={onLoad} />
      </div>
    )
  }
}

FullImage.propTypes = {
  src: React.PropTypes.string,
  style: React.PropTypes.object,
  onload: React.PropTypes.func
 };

export default FullImage
