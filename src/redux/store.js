/*
 * Redux store brings together the state, actions, and reducers that make up our app.
 */

import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist' // Allows browser to cachr our store
import logger from 'redux-logger'
import rootReducer from './root-reducer'
const middelwares = []

if (process.env.NODE_ENV === 'development') {
  middelwares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middelwares))

const persistor = persistStore(store)

export { store, persistor }
