import { CellSelector } from '../../../selectors/CellSelector'
import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'

const CellViewer = props => {
  const {
    className,
    id,
    isEditing,
    onBlur,
    onChange,
    onClick,
    onDoubleClick,
    onKeyPressDisplay,
    onKeyPressInput,
    value,
    cellRef
  } = props

  const display = useSelector(state => CellSelector(state, { id, isEditing }))

  const render = () => {
    if (isEditing) {
      return (
        <input
          autoFocus
          className={className}
          id={id}
          onBlur={onBlur}
          onChange={onChange}
          onKeyPress={onKeyPressInput}
          ref={cellRef}
          value={value}
        />)
    }else{
      return (<input
        className={className}
        id={id}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onTouchStart={onDoubleClick}
        onKeyDown={onKeyPressDisplay}
        readOnly
        value={display}
      />)
    }
        
  }

  return render()
}

export default CellViewer

CellViewer.propTypes = {
  id: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

CellViewer.defaultProps = {}