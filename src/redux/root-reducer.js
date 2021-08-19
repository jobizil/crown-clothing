/*
 * This houses the entire reducers of the redux and houses the states broken into components.
 */
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' //Imports the local storage object as default storage

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './dircetory/directory.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], //Contains name of any reducer we intend to store.
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
})

export default persistReducer(persistConfig, rootReducer)
