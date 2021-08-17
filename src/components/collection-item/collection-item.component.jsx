import './collection-item.styles.scss'

import CustomButton from '../custom-button/custom-button.component'

const CollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <div className='collection-item'>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className='image' />

      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'> {price} </span>
      </div>
      <CustomButton inverted>Add To Cart</CustomButton>
    </div>
  )
}
export default CollectionItem
