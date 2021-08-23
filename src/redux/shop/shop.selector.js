import { createSelector } from 'reselect'

// Select the Shop
const selectShop = state => state.shop

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
)
