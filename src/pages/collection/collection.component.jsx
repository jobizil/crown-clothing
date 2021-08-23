import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component'

import { selectCollection } from '../../redux/shop/shop.selector'
import './collection.styles.scss'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})
export default connect(mapStateToProps)(CollectionPage)

// ownProps=> Usually the props of the the component to be wrapped in the connect .
// selectCollection(ownProps.match.params.collectionId)(state)=> This is happenning because the part of the state is dependong on the URL parameter.
