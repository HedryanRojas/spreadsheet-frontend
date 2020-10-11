import * as SpreadSheetAction from './SpreadSheetAction'
import BaseReducer from '../BaseReducer'
import { toast } from 'react-toastify'

export const initialState = {
  newId:null,
  spreadsheets:[],
  spreadsheet:{},
}

const SpreadSheetReducer = BaseReducer(initialState, {
  [SpreadSheetAction.SAVE_CELL_DATA_FINISHED](state, action) {
    return {
      ...state,
      spreadsheet: action.payload,
    }
  },
  [SpreadSheetAction.REQUEST_SPREADSHEETS_FINISHED](state, action) {
    return {
      ...state,
      spreadsheets:action.payload
    }
  },
  [SpreadSheetAction.REQUEST_SPREADSHEET_FINISHED](state, action) {
    return {
      ...state,
      newId: null,
      spreadsheet:action.payload
    }
  },
  [SpreadSheetAction.REQUEST_CREATE_SPREADSHEET_FINISHED](state, action) {
    return {
      ...state,
      newId:action.payload
    }
  },
  [SpreadSheetAction.REQUEST_DELETE_SPREADSHEET_FINISHED](state, action) {
    toast.success('Spreadsheet deleted', {position:'bottom-right'})
    return {
      ...state,
      spreadsheets:action.payload
    }
  },

})

export default SpreadSheetReducer