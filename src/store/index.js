import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import todoReducer from './../reducers/todo'
import messageReducer from './../reducers/message'

export default createStore(
  combineReducers({
    app: todoReducer,
    message: messageReducer
  }),
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
