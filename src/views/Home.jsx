import '../assets/styles/Home.scss'
import * as SpreadSheetAction from '../stores/spreadsheet/SpreadSheetAction'
import React, { useEffect } from 'react'
import {
  newSpreadsheetIdSelector,
  spreadsheetsSelector,
} from '../selectors/SpreadSheetSelector'
import { useDispatch, useSelector } from 'react-redux'
import LoadingIndicator from './components/LoadingIndicator'
import PropTypes from 'prop-types'
import { selectRequesting } from '../selectors/RequestingSelector'

const Home = (props) => {
  const dispatch = useDispatch()
  const cards = useSelector((state) => spreadsheetsSelector(state))
  const newSpreadsheetId = useSelector((state) =>
    newSpreadsheetIdSelector(state)
  )

  const isRequesting = useSelector((state) =>
    selectRequesting(state, [
      SpreadSheetAction.REQUEST_SPREADSHEETS,
      SpreadSheetAction.REQUEST_CREATE_SPREADSHEET,
      SpreadSheetAction.REQUEST_DELETE_SPREADSHEET,
    ])
  )

  useEffect(() => {
    dispatch(SpreadSheetAction.requestSpreadSheets())
  }, [dispatch])

  const create = () => {
    dispatch(SpreadSheetAction.requestCreateSpreadSheet())
  }

  const render = () => {
    if (newSpreadsheetId) {
      props.history.push(`/spreadsheet/${newSpreadsheetId}`)
      return <div>redirecting..</div>
    } else {
      return (
        <LoadingIndicator isActive={isRequesting}>
          <div className="home__info">
            <span>Files</span>
            <button
              className="button secondary"
              disabled={isRequesting}
              onClick={create}
            >
              New
            </button>
          </div>
          <section className="home__grid">{cards}</section>
        </LoadingIndicator>
      )
    }
  }

  return render()
}

Home.propTypes = {
  history: PropTypes.object,
}
export default Home
