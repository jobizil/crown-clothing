/*
 *Actions are plain JavaScript objects that have a type field. As mentioned earlier, you can think of an action as an event that describes something that happened in the application.
 https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
 */
import { UserActionTypes } from './user.types'
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
})
