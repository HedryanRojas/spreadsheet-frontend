import { createSelector } from 'reselect'

export const CurrentUserSelector = createSelector(
  (state) => state.auth.user,
  _selectCurrentUser
)

function _selectCurrentUser(user) {
  return user
}
