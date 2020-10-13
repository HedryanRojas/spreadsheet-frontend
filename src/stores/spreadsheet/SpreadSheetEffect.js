import * as HttpUtility from '../../assets/utils/HttpUtility'
import FormulaUtility from '../../assets/utils/FormulaUtility'
import ResponseError from '../../assets/utils/ResponseError'
import { dummySpreadSheets } from '../../assets/utils/DummyData'

const { REACT_APP_API } = process.env
const endpoint = REACT_APP_API + 'spreadsheet/'

export function saveCellData(spreadsheet, cellData) {
  const { data } = spreadsheet
  const mergedData = { ...data, ...cellData }
  spreadsheet.data = _dataWithDisplay(mergedData)
  return spreadsheet
}

export async function getAll(email) {
  const response = await HttpUtility.get(`${endpoint}?email=${email}`)
  return _getPayload(response)
}

export async function getAllDummy() {
  return JSON.parse(localStorage.getItem('SHEETS'))
}

export async function get(id) {
  const response = await HttpUtility.get(`${endpoint}/${id}`)
  return _getPayload(response)
}

export async function getDummy(id) {
  return dummySpreadSheets.find((ss) => (ss._id === id))
}

export async function create(spreadsheet) {
  const response = await HttpUtility.post(endpoint, {
    data: JSON.stringify(spreadsheet),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return _getPayload(response)
}

export async function createDummy(spreadsheet) {
  const newSheet = { _id: spreadsheet.name + '-mock', ...spreadsheet }
  const newList = [...JSON.parse(localStorage.getItem('SHEETS')), newSheet]
  localStorage.setItem('SHEETS', JSON.stringify(newList))
  return newSheet._id
}

export async function remove(id, spreadsheets) {
  const response = await HttpUtility.del(`${endpoint}/${id}`)
  if (response instanceof ResponseError) {
    return response
  }

  const { data: deletedId } = response.data

  const payload = spreadsheets.filter((sheet) => sheet._id !== deletedId)
  return payload
}

export async function removeDummy(id, spreadsheets) {
  const payload = spreadsheets.filter((sheet) => sheet._id !== id)
  localStorage.setItem('SHEETS', JSON.stringify(payload))
  return payload
}

function _dataWithDisplay(data) {
  const withDisplay = {}
  for (let [key, value] of Object.entries(data)) {
    const display = FormulaUtility.determinateDisplay(value, withDisplay)
    withDisplay[key] = { ...value, ...{ display } }
  }
  return withDisplay
}

function _getPayload(response) {
  if (response instanceof ResponseError) {
    return response
  }
  const { data: payload } = response.data
  return payload
}
