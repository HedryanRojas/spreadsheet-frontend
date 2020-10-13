/* eslint-disable no-console */
import * as ActionUtility from '../../assets/utils/ActionUtility'
import * as SpreadSheetEffect from './SpreadSheetEffect'
import { generate } from '../../assets/utils/NameGenator'
import { isDummy } from '../../assets/utils/DummyData'

export const SAVE_CELL_DATA = 'SpreadSheetAction.SAVE_CELL_DATA'
export const SAVE_CELL_DATA_FINISHED =
  'SpreadSheetAction.SAVE_CELL_DATA_FINISHED'

export function saveCellData(key, cell) {
  return async (dispatch, getState) => {
    const spreadsheet = await getState().spreadsheet.spreadsheet
    const data = { [key]: cell }

    await ActionUtility.createThunkEffect(
      dispatch,
      SAVE_CELL_DATA,
      SpreadSheetEffect.saveCellData,
      spreadsheet,
      data
    )
  }
}

export const REQUEST_SPREADSHEETS = 'SpreadSheetAction.REQUEST_SPREADSHEETS'
export const REQUEST_SPREADSHEETS_FINISHED =
  'SpreadSheetAction.REQUEST_SPREADSHEETS_FINISHED'

export function requestSpreadSheets() {
  return async (dispatch, getState) => {
    const { user } = await getState().auth
    const action = isDummy
      ? SpreadSheetEffect.getAllDummy
      : SpreadSheetEffect.getAll
    await ActionUtility.createThunkEffect(
      dispatch,
      REQUEST_SPREADSHEETS,
      action,
      user.email
    )
  }
}

export const REQUEST_SPREADSHEET = 'SpreadSheetAction.REQUEST_SPREADSHEET'
export const REQUEST_SPREADSHEET_FINISHED =
  'SpreadSheetAction.REQUEST_SPREADSHEET_FINISHED'

export function requestSpreadSheet(id) {
  return async (dispatch) => {
    const action = isDummy ? SpreadSheetEffect.getDummy : SpreadSheetEffect.get
    await ActionUtility.createThunkEffect(
      dispatch,
      REQUEST_SPREADSHEET,
      action,
      id
    )
  }
}

export const REQUEST_CREATE_SPREADSHEET =
  'SpreadSheetAction.REQUEST_CREATE_SPREADSHEET'
export const REQUEST_CREATE_SPREADSHEET_FINISHED =
  'SpreadSheetAction.REQUEST_CREATE_SPREADSHEET_FINISHED'

export function requestCreateSpreadSheet() {
  return async (dispatch, getState) => {
    const { email } = await getState().auth.user
    const spreadsheet = {
      email,
      name: generate('spreadsheet'),
      data: {},
    }
    const action = isDummy
      ? SpreadSheetEffect.createDummy
      : SpreadSheetEffect.create
    await ActionUtility.createThunkEffect(
      dispatch,
      REQUEST_CREATE_SPREADSHEET,
      action,
      spreadsheet
    )
  }
}

export const REQUEST_DELETE_SPREADSHEET =
  'SpreadSheetAction.REQUEST_DELETE_SPREADSHEET'
export const REQUEST_DELETE_SPREADSHEET_FINISHED =
  'SpreadSheetAction.REQUEST_DELETE_SPREADSHEET_FINISHED'

export function requestDelete(id) {
  return async (dispatch, getState) => {
    const spreadsheets = await getState().spreadsheet.spreadsheets
    const action = isDummy
      ? SpreadSheetEffect.removeDummy
      : SpreadSheetEffect.remove
    await ActionUtility.createThunkEffect(
      dispatch,
      REQUEST_DELETE_SPREADSHEET,
      action,
      id,
      spreadsheets
    )
  }
}
