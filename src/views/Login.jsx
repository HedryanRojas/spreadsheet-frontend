import '../assets/styles/Login.scss'
import * as AuthAction from '../stores/auth/AuthAction'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch } from 'react-redux'

const { REACT_APP_ONLY_DUMMY } = process.env

const Login = () => {
  const dispatch = useDispatch()

  const login = () => {
    dispatch(AuthAction.login())
  }

  const dummy = () => {
    dispatch(AuthAction.dummyLogin())
  }

  return (
    <section className="login">
      <section className="login__container">
        <div>
          <h1>Welcome!</h1>
          <p>Use your google account to access.</p>
        </div>
        {!REACT_APP_ONLY_DUMMY && (
          <button className="button white" onClick={login}>
            Login with google
          </button>
        )}
        <button className="button white" onClick={dummy}>
          Dummy login
        </button>
      </section>
    </section>
  )
}

Login.propTypes = {
  history: PropTypes.object,
}
export default Login
