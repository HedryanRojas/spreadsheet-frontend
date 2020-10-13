import * as AuthAction from './AuthAction'
import BaseReducer from '../BaseReducer'

export const initialState = {
  user: null,
}

const AuthReducer = BaseReducer(initialState, {
  [AuthAction.AUTH_REQUEST_FINISHED](state, action) {
    return {
      ...state,
      user: action.payload,
    }
  }
})

export default AuthReducer