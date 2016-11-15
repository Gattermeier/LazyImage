const conditionalStyles = require('./styles')

function getStyles(target, styles, condition) {
  return Object.assign({},
    styles,
    condition && conditionalStyles[target].true,
    !condition && conditionalStyles[target].false
  )
}

module.exports = getStyles
