import * as AuthAction  from '../stores/auth/AuthAction'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import App from './App'
import Auth from './Auth'
import { CurrentUserSelector } from '../selectors/AuthSelector'
import firebaseApp from '../firebase'

const Router = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    firebaseApp.auth().onAuthStateChanged(user=>{
      dispatch(AuthAction.setCurrentUser(user))
      setLoading(false)
    })
  },[dispatch])

  const currentUser = useSelector(state => CurrentUserSelector(state))

  if(loading) return <>loading...</>

  const isLogin = !!currentUser
  return isLogin ? <App /> : <Auth />
}

export default Router