export default function baseReducer(initialState, methods) {
  return (state = initialState, action) => {
    const method = methods[action.type]
  
    if (!method || action.error) {
      return state
    }
  
    return method(state, action)
  }
}
  