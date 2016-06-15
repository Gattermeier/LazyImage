import React from 'react'
import FullImage from './FullImage'
import LazyImage from './LazyImage'
import getStyles from '../shared/getStyles'

class LazyImageWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
    this.handleLoaded = this.handleLoaded.bind(this);
  }
  handleLoaded() {
    this.setState({
      loaded: true
    })
  }
  render() {
    const { src, small, width, height, blurRadius } = this.props;
    const styles = {
      width,
      height,
      padding: 0,
      margin: 0,
      position: 'absolute',
      top: 0,
    }

    const ease = {
      WebkitTransition: 'opacity 250ms ease-in-out',
      MozTransition: 'opacity 250ms ease-in-out',
      OTransition: 'opacity 250ms ease-in-out',
      transition: 'opacity 250ms ease-in-out',
    }

    const wrapperStyles = {
      paddingBottom: styles.height,
      position: 'relative'
    }

    return (
      <div style={wrapperStyles}>
        <FullImage src={src} style={getStyles('FullImage', styles, this.state.loaded)} onLoad={this.handleLoaded} />
        <LazyImage src={small} width={width} height={height} style={getStyles('LazyImage', Object.assign({}, ease, styles), this.state.loaded)} blurRadius={this.props.blurRadius}/>
      </div>
    )
  }
}

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
