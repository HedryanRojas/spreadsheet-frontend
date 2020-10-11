import '../../assets/styles/components/LoadingIndicator.scss'

import PropTypes from 'prop-types'
import React from 'react'

const LoadingIndicator = props =>  {
  const { isActive  } = props
  return (
    <div>
      {isActive && (
        <div className="progress-line"></div>
      )}
      {props.children}
    </div>
  )
}

LoadingIndicator.propTypes={
  isActive: PropTypes.bool, 
  children: PropTypes.node
}

LoadingIndicator.defaultProps = {
  isActive: false,
}

export default LoadingIndicator

