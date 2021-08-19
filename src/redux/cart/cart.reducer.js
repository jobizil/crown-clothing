import { cartActionType } from './cart.types'
import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Toggles Cart Dropdown Page
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
    // Clear Items from Cart
    case cartActionType.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        ), //Returns a new array if True. i.e Removes cartitem.id if action.payload.id is true
      }
    default:
      return state
  }
}
export default cartReducer
