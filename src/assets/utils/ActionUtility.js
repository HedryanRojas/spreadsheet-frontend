import ResponseError from './ResponseError'

export async function createThunkEffect(dispatch, actionType, effect, ...args){
  dispatch(createAction(actionType))
  const payload = await effect(...args)
  const isError = payload instanceof ResponseError
  dispatch(createAction(`${actionType}_FINISHED`, payload, isError))
}

export function createAction(type, payload = undefined, error = false) {
  return { type, payload, error }
}