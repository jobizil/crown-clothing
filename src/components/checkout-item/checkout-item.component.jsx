import { connect } from 'react-redux'
import { FaTimes, FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import {
  clearCartItem,
  addItem,
  removeItem,
} from '../../redux/cart/cart.action'
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, price, imageUrl, quantity } = cartItem
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          <BsChevronLeft />
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          <BsChevronRight />
        </div>
      </span>
      <span className='price'>${price}</span>
      <div onClick={() => clearItem(cartItem)}>
        <FaTimes className='remove-button' />
      </div>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearCartItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
})
export default connect(null, mapDispatchToProps)(CheckoutItem)
