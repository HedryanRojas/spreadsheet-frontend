import '../../assets/styles/components/Header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { CurrentUserSelector } from '../../selectors/AuthSelector'
import { Link } from 'react-router-dom'
import React from 'react'
import exitIcon from '../../assets/static/exit-icon.png'
import logo from '../../assets/static/logo.png'
import { logout } from '../../stores/auth/AuthAction'

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => CurrentUserSelector(state))
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Spreadsheet logo' />
      </Link>
      <div className='header__menu'>
        <Link to='/settings'>
          <img src={user.photoURL} alt='home icon' />
        </Link>
        <Link to='/'>
          <img src={exitIcon} alt='exit icon' onClick={()=>dispatch(logout())}/>
        </Link>
      </div>
    </header>
  )}

export default Header