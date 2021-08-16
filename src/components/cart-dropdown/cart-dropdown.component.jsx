import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>CHECKOUT CART</CustomButton>
  </div>
)
export default CartDropdown
