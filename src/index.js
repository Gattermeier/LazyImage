const React = require('react');
const ReactDOM = require('react-dom');
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
    this.width = container.offsetWidth;
    this.height = container.offsetHeight;
    this.canvas = ReactDOM.findDOMNode(this.refs.canvas);
    this.canvas.height = this.height;
    this.canvas.width = this.width;
    var blurRadius = this.props.blurRadius || 0;
    this.preImg = document.createElement('img');
    this.preImg.crossOrigin = 'Anonymous';
    this.preImg.onload = () => {
      StackBlur(this.preImg, this.canvas, blurRadius, 600, 190);
    };
    this.preImg.src = this.props.src;
  }
  componentWillUpdate(nextProps) {
    if (this.preImg.src !== nextProps.src) {
      this.preImg.src = nextProps.src;
    }
    StackBlur(this.preImg, this.canvas, nextProps.blurRadius, 600, 190);
  }
  render() {
    var { src, style } = this.props;
    return (
      <div style={style} >
        <canvas ref='canvas' />
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

module.exports = LazyImageWrapper
