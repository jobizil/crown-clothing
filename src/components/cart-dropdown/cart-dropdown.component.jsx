import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>CHECKOUT CART</CustomButton>
  </div>
)
/* State can be destructured as => { cart: { cartItems } } */
const mapStateToProps = state => ({
  // cartItems,
  cartItems: state.cart.cartItems,
})
export default connect(mapStateToProps)(CartDropdown)
