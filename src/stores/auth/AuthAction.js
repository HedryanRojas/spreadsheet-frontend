import * as ActionUtility from '../../assets/utils/ActionUtility'
import * as AuthEffect from './AuthEffect'

export const AUTH_REQUEST = 'AuthAction.AUTH_REQUEST'
export const AUTH_REQUEST_FINISHED = 'AuthAction.AUTH_REQUEST_FINISHED'

export function login() {
  return async dispatch => {
    await ActionUtility.createThunkEffect(dispatch, AUTH_REQUEST, AuthEffect.login)
  }
}

export function dummyLogin() {
  return async dispatch => {
    await ActionUtility.createThunkEffect(dispatch,AUTH_REQUEST, AuthEffect.dummyLogin)
  }
}

export function setCurrentUser(user) {
  return async dispatch => {
    await ActionUtility.createThunkEffect(dispatch, AUTH_REQUEST, AuthEffect.setCurrentUser, user)
  }
}

export function logout() {
  return async dispatch => {
    await ActionUtility.createThunkEffect(dispatch, AUTH_REQUEST, AuthEffect.logout)
  }
}

