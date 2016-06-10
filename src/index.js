// const React = require('react');
// const ReactDOM = require('react-dom');
const StackBlur = require('../shared/stackblur');

function getStyles(target, styles, condition) {
  let conditionalStyles = require('../shared/styles');

  return Object.assign({},
    styles,
    condition && conditionalStyles[target].true,
    !condition && conditionalStyles[target].false
  )
}

class FullImage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var {src, onLoad, style} = this.props
    return (
      <div style={style}>
        <img src={src} style={style} onLoad={onLoad} />
      </div>
    )
  }
}
class LazyImage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    var container = ReactDOM.findDOMNode(this);
    console.log('precanvas')
    let canvas = this.refs.canvas;
    console.log(canvas, 'canvas')

    this.width = container.offsetWidth;
    this.height = container.offsetHeight;
    canvas.height = this.height;
    canvas.width = this.width;

    let blurRadius = this.props.blurRadius || 0;

    this.preImg = document.createElement('img');
    this.preImg.crossOrigin = 'Anonymous';
    this.preImg.onload = () => {
      StackBlur(this.preImg, canvas, blurRadius, 600, 190);
    };
    this.preImg.src = this.props.src;
    console.log(this.preImg, 'PREIMG componentDidMount')
  }
  // componentWillUpdate(nextProps) {
  //   let canvas = this.refs.canvas;
  //   console.log(this.preImg, 'PREIMG componentWillUpdate')
  //
  //   if (this.preImg.src !== nextProps.src) {
  //     this.preImg.src = nextProps.src;
  //   }
  //   StackBlur(this.preImg, canvas, nextProps.blurRadius, 600, 190);
  // }
  render() {
    const { src, style } = this.props;
    return (
      <div style={style} >
        <canvas  />
      </div>
    )
  }
}

class LazyImageWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoaded = this.handleLoaded.bind(this);
    this.state = {
      loaded: false
    }
  }
  handleLoaded() {
    this.setState({
      loaded: true
    })
  }
  render() {
    var { src, small, width, height, children, className, blurRadius } = this.props;
    var styles = {
      width,
      height,
      padding: 0,
      margin: 0,
      position: 'absolute',
      top: 0
    }

    var wrapperStyles = {
      paddingBottom: styles.height,
      position: 'relative'
    }
    return (
      <div style={wrapperStyles}>
        <FullImage src={src} style={getStyles('FullImage', styles, this.state.loaded)} onLoad={this.handleLoaded} />
        <LazyImage src={small} style={getStyles('LazyImage', styles, this.state.loaded)} blurRadius={this.props.blurRadius}/>
      </div>
    )
  }
}

// ES6 only, not using ES7 property initializers to avoid using babel stage-0 preset
LazyImageWrapper.propTypes = {
  blurRadius: React.PropTypes.number,
  width: React.PropTypes.number,
  height: React.PropTypes.number
 };
LazyImageWrapper.defaultProps = {
  blurRadius: 10,
  width: 600,
  height: 190
};


module.exports = LazyImageWrapper
