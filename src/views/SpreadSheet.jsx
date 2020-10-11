import '../assets/styles/SpreadSheet.scss'
import * as SpreadSheetAction from '../stores/spreadsheet/SpreadSheetAction'
import { AutoSizer, MultiGrid } from 'react-virtualized'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CellRenderer from './components/Cell'
import LoadingIndicator from './components/LoadingIndicator'
import NotFound from './NotFound'
import PropTypes from 'prop-types'
import {  hasErrorSelector } from '../selectors/ErrorSelector'
import { selectRequesting } from '../selectors/RequestingSelector'

const SpreadSheet = props => {
  const { columnCount, rowCount, match } = props
  const dispatch = useDispatch()
  
  const isRequesting = useSelector(state => selectRequesting(state, [
    SpreadSheetAction.REQUEST_SPREADSHEET,
  ]))
  const hasError = useSelector(state => hasErrorSelector(state, [
    SpreadSheetAction.REQUEST_SPREADSHEET_FINISHED,
  ]))

  useEffect(() => {
    const { params } = match
    dispatch(SpreadSheetAction.requestSpreadSheet(params.id))

    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [dispatch, match])

  const render = () => {
    if(hasError){
      return <NotFound />
    }else{
      return (
        <LoadingIndicator isActive={isRequesting}>
          <section className='spreadSheet'>
            <AutoSizer>
              {({ height, width }) => (
                <MultiGrid
                  cellRenderer={CellRenderer}
                  columnCount={columnCount}
                  columnWidth={100}
                  fixedColumnCount={1}
                  fixedRowCount={1}
                  height={height}
                  rowCount={rowCount}
                  rowHeight={25}
                  width={width}
                />
              )}
            </AutoSizer>
          </section>
        </LoadingIndicator>
      )
    }
  }

  return render()
}

SpreadSheet.propTypes = {
  columnCount: PropTypes.number,
  rowCount: PropTypes.number,
  match: PropTypes.object,
}

SpreadSheet.defaultProps = {
  columnCount: 1000,
  rowCount: 1000
}

export default React.memo(SpreadSheet)

