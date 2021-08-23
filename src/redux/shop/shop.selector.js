import memoize from 'lodash.memoize'

import { createSelector } from 'reselect'

// Select the Shop

const selectShop = state => state.shop

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => key[collections])
)
/* Match url Params to shop collection */

export const selectCollection = memoize(collectionUrlParam =>
  createSelector(
    selectCollections,
    collections => collections[collectionUrlParam]
  )
)
