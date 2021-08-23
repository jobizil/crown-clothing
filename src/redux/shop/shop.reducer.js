import SHOP_DATA from './shop.data'

const INITIAL_STATE = {
  collections: SHOP_DATA,
}
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //   SInce no change is to be made to the data, we just return the state
    default:
      return state
  }
}
export default shopReducer
