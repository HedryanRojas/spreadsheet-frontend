import '../../../assets/styles/components/Cell.scss'
import * as SpreadSheetAction from '../../../stores/spreadsheet/SpreadSheetAction'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import CellViewer from './CellViewer'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

const UNSELECT_ALL = 'unselectAll'
const KEY_CODES = { DEL: 8, SUPR: 46, TAB: 9, }

const Cell = props => {
  const [value, setValue] = useState('')
  const [isEditing, setEditing] = useState(false)
  const [isSelected, setSelected] = useState(false)
  const { row, column, title, id } = props
  const dispatch = useDispatch()
  const cellRef = useRef(null)     

  const handleUnSelectAll = useCallback(() => {
    if (isSelected || isEditing) {
      setSelected(false)
      setEditing(false)
    }
  }, [isSelected, isEditing])

  useEffect(() => {
    if(isEditing) cellRef.current.select()
    window.document.addEventListener(UNSELECT_ALL, handleUnSelectAll)
    return function cleanUp() {
      window.document.removeEventListener(UNSELECT_ALL, handleUnSelectAll)
    }
  }, [dispatch, handleUnSelectAll, isEditing])

  const emitUnselectAllEvent = () => {
    const unselectAllEvent = new Event(UNSELECT_ALL)
    document.dispatchEvent(unselectAllEvent)
  }

  const onClick = () => {
    emitUnselectAllEvent()
    setSelected(true)
  }

  const onDoubleClick = () => {
    emitUnselectAllEvent()
    setSelected(true)
    setEditing(true)
  }

  const onChange = e => setValue(e.target.value)

  const onBlur = e => saveValue(e.target.value)

  const onKeyPressInput = e => {
    if (e.key === 'Enter') saveValue(e.target.value)
  }
 
  const onKeyPressDisplay = e => {
    const { keyCode } = e
    if (keyCode !== KEY_CODES.TAB) {
      if (keyCode === KEY_CODES.DEL || keyCode === KEY_CODES.SUPR) {
        saveValue('')
        setValue('')
      }
      else if (!isEditing) {
        setEditing(true)
      }
    }
  }

  const saveValue = value => {
    const cell = { value, row, column }
    dispatch(SpreadSheetAction.saveCellData(id, cell))
    setSelected(false)
    setEditing(false)
  }
  const render = () => {
    if (row === 0) return (<div className='cell header'>{title}</div>)
    if (column === 0) return (<div className='cell header'>{row}</div>)
    return (
      <CellViewer
        className={`cell${isSelected ? ' cell--selected' : ''}`}
        id={id}
        cellRef={cellRef}
        isEditing={isEditing}
        onBlur={onBlur}
        onChange={onChange}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onKeyPressDisplay={onKeyPressDisplay}
        onKeyPressInput={onKeyPressInput}
        value={value} />)
  }

  return render()
}

Cell.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
}

export default Cell