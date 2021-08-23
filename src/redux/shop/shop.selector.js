import memoize from 'lodash.memoize'

import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
}
// Select the Shop

const selectShop = state => state.shop

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
)

/* Match url Params to shop collection */

export const selectCollection = memoize(collectionUrlParam =>
  createSelector(selectCollections, collections =>
    collections.find(
      collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
)
