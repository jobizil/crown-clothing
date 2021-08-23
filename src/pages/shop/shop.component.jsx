import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPrview from '../../components/collection-preview/collection-preview'
import { selectCollections } from '../../redux/shop/shop.selector'

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => {
      return <CollectionPrview key={id} {...otherCollectionProps} />
    })}
  </div>
)
const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
})
export default connect(mapStateToProps)(ShopPage)
