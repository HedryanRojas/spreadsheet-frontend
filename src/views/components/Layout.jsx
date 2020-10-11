import 'react-toastify/dist/ReactToastify.css'
import Header from './Header'
import PropTypes from 'prop-types'
import React from 'react'
import { ToastContainer } from 'react-toastify'

const Layout = ({ children }) => (
  <div className='App'>
    <Header />
    {children}
    <ToastContainer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
