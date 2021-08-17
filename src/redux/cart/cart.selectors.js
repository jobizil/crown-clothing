import { createSelector } from 'reselect'

// Input Selector => Doesn't use createSelector
// Output Selector => Uses both Input Selector and createSelector

const selectCart = state => state.cart

// Memoize selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
)
