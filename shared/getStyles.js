function getStyles(target, styles, condition) {
  let conditionalStyles = require('./styles');

  return Object.assign({},
    styles,
    condition && conditionalStyles[target].true,
    !condition && conditionalStyles[target].false
  )
}

export default getStyles
