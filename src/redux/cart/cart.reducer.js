import { cartActionType } from './cart.types'
import { addItemToCart } from './cart.utils'
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // TOggles Cart Dropdown Page
    case cartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    // Adds new Item to Cart
    case cartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    default:
      return state
  }
}
export default cartReducer
