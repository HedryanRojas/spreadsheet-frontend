import '../../assets/styles/components/Card.scss'
import * as SpreadSheetAction from '../../stores/spreadsheet/SpreadSheetAction'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import spreadSheetDelIcon from '../../assets/static/spreadsheet-del-icon.png'
import spreadSheetIcon from '../../assets/static/spreadsheet-icon.png'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'


const Card = ({ spreadsheet, history }) => {
  const dispatch = useDispatch()
  const [img, setImg] = useState(spreadSheetIcon)


  const open = () => { history.push(`/spreadsheet/${spreadsheet._id}`)}
  const remove = e => {
    e.stopPropagation()
    dispatch(SpreadSheetAction.requestDelete(spreadsheet._id))
  }
  return (
    <div className='card' onClick={open}>
      <img className='card__img' src={img}
        alt='spreadsheet logo' 
        onMouseOver={()=>setImg(spreadSheetDelIcon)}
        onMouseOut={()=>setImg(spreadSheetIcon)} 
        onClick={e => remove(e)}/>
      <div className='card__info' >
        <span title={spreadsheet.name}>{spreadsheet.name}</span>
      </div>
    </div>
  )
}

Card.propTypes = {
  spreadsheet: PropTypes.object.isRequired,
  history: PropTypes.object,
}

export default withRouter(Card)