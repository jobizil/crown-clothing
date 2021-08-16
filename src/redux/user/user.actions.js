/*
 *Actions are plain JavaScript objects that have a type field. As mentioned earlier, you can think of an action as an event that describes something that happened in the application.
 https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
 */

export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user,
})
