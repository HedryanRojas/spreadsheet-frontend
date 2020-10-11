import Cell from './Cell'
import PropTypes from 'prop-types'
import React from 'react'
import titles from '../../../assets/static/ColumnTitles.json'

export default function CellRenderer ({
  columnIndex,
  rowIndex,
  key,
  style}) {

  const title = titles[columnIndex]
  const id = title + rowIndex

  return (
    <div style={style} key={key}>
      <Cell
        title={title}
        id={id}
        key={`${rowIndex}-${columnIndex}`}
        row={rowIndex}
        column={columnIndex}
      />
    </div>
  )
}

CellRenderer.propTypes = {
  columnIndex: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  key: PropTypes.number,
  style: PropTypes.object,
}