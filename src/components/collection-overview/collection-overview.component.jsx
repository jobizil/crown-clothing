/*
 * This houses the entire collection preview component.
 */

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selector'
import CollectionPrview from '../collection-preview/collection-preview.component'

import './collection-overview.styles.scss'

const CollectionsOverview = ({ collections }) => (
  <div className='collection-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => {
      return <CollectionPrview key={id} {...otherCollectionProps} />
    })}
  </div>
)
const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
})

export default connect(mapStateToProps)(CollectionsOverview)
