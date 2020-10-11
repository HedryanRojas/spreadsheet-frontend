/* eslint-disable no-unused-vars */
import { toast } from 'react-toastify'

export const initialState = {}

export default function errorReducer(state = initialState, action) {
  const { type, error, payload } = action

  /*
   * True if the action type has the key word '_FINISHED' then the action is finished.
   */
  const isFinishedRequestType = type.includes('_FINISHED')
  /*
   * True if the action type has the key word 'REQUEST_' and not '_FINISHED'.
   */
  const isStartRequestType = type.includes('REQUEST_') && !isFinishedRequestType

  /*
   * If an action is started we want to remove any old errors because there is a new action has been re-dispatched.
   */
  if (isStartRequestType) {
    // Using ES7 Object Rest Spread operator to omit properties from an object.
    const { [`${type}_FINISHED`]: value, ...stateWithoutFinishedType } = state

    return stateWithoutFinishedType
  }

  /*
   * True if the action is finished and the error property is true.
   */
  const isError = isFinishedRequestType && Boolean(error)

  /*
   * For any start and finished actions that don't have errors we return the current state.
   */
  if (isError === false) {
    return state
  }

  /*
   * At this point the "type" will be a finished action type (e.g. "SomeAction.REQUEST_*_FINISHED").
   * The payload will be a HttpErrorResponseModel.
   */
  toast.error(payload.message, { position:'bottom-right' })
  return {
    ...state,
    [type]: payload,
  }
}
