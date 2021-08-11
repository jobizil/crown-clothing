import './collection-preview.styles.scss'

import CollectionItem from '../collection-item/collection-item.component'
const CollectionPrview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherCollectionItems }) => (
          <CollectionItem key={id} {...otherCollectionItems} />
        ))}
    </div>
  </div>
)

export default CollectionPrview
