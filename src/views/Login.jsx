import '../assets/styles/Login.scss'
import * as AuthAction from '../stores/auth/AuthAction'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch()

  const login = () => {
    dispatch(AuthAction.login())
  }

  return (
    <section className="login">
      <section className="login__container">
        <div>
          <h1>Welcome!</h1>
          <p>Use your google account to access.</p>
        </div>
        <button className="button white" onClick={login}>
          Login with google
        </button>
      </section>
    </section>
  )
}

Login.propTypes = {
  history: PropTypes.object,
}
export default Login
