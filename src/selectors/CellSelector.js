import { createSelector } from 'reselect'

export const CellSelector = createSelector(
  state => state.spreadsheet.spreadsheet,
  (_, arg) => arg,
  _selectCellData)

function _selectCellData(spreadsheet, arg) {
  const { id, isEditing } = arg
  const {data} = spreadsheet
  try {
    if (data[id]) return isEditing ? data[id].value : data[id].display
  } catch (error) {
    return ''
  }
}


