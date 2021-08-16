/*
 * Redux store brings together the state, actions, and reducers that make up our app.
 */

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
const middelwares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middelwares))

export default store
