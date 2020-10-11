import * as AuthAction from './AuthAction'
import BaseReducer from '../BaseReducer'

export const initialState = {
  user: null,
  isDummy: false,
}

const AuthReducer = BaseReducer(initialState, {
  [AuthAction.AUTH_REQUEST_FINISHED](state, action) {
    return {
      ...state,
      user: action.payload?.user,
      isDummy: action.payload?.isDummy
    }
  }
})

export default AuthReducer