
import { applyMiddleware, createStore } from 'redux'
import RootReducer from './RootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export default function rootStore(initialState){
  return createStore(RootReducer, initialState,composeWithDevTools(applyMiddleware(thunk)))
}