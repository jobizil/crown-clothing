import { connect } from 'react-redux'
import { clearCartItem } from '../../redux/cart/cart.action'
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, price, imageUrl, quantity } = cartItem
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#128465;
      </div>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearCartItem(item)),
})
export default connect(null, mapDispatchToProps)(CheckoutItem)
