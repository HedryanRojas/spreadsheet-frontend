import AuthReducer from './auth/AuthReducer'
import ErrorReducer from './error/ErrorReducer'
import RequestingReducer from './requesting/RequestingReducer'
import SpreadSheetReducer from './spreadsheet/SpreadSheetReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  error: ErrorReducer,
  requesting: RequestingReducer,
  spreadsheet: SpreadSheetReducer,
  auth: AuthReducer
})