import React from 'react'
const StackBlur = require('../shared/stackblur');

class LazyImage extends React.Component {
  componentDidMount(){
    this.canvas = this.refs.canvas
    this.preImg = document.createElement('img');
    this.preImg.crossOrigin = 'Anonymous';
    this.preImg.onload = () => {
      StackBlur(this.preImg, this.refs.canvas, this.props.blurRadius, this.props.width, this.props.height);
    };
    this.preImg.src = this.props.src;
  }
  componentWillUpdate(nextProps) {
    if (this.preImg.src !== nextProps.src) {
      this.preImg.src = nextProps.src;
    }
    StackBlur(this.preImg, this.canvas, nextProps.blurRadius, this.props.width, this.props.height);
  }

  render() {
    const { style, width, height } = this.props;

    return (
      <div style={style}>
        <canvas width={width} height={height} style={style} ref="canvas" />
      </div>
    )
  }
}

LazyImage.propTypes = {
  src: React.PropTypes.string,
  style: React.PropTypes.object,
  blurRadius: React.PropTypes.number,
  width: React.PropTypes.number,
  height: React.PropTypes.number
};

LazyImage.defaultProps = {
  blurRadius: 10,
  width: 600,
  height: 190
};

export default LazyImage
