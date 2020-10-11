import { createSelector } from 'reselect'

export const hasErrorSelector = createSelector(
  (state) => state.error,
  (_, actionTypes) => actionTypes,
  _hasErrors
)

function _hasErrors(errorState, actionTypes) {
  return actionTypes.map((actionType) => errorState[actionType]).filter(Boolean).length > 0
}
