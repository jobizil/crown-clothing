/*
 * This renders all the colletion of items in the collection preview compob=nent which is then linked to the shop page
 */

import './collection-preview.styles.scss'

import CollectionItem from '../collection-item/collection-item.component'
const CollectionPrview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
)

export default CollectionPrview
