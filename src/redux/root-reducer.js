import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'

/*
 * This houses the entire reducers of the redux and houses the states broken into components.
 */
export default combineReducers({
  user: userReducer,
})
