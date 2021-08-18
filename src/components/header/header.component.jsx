import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectHiddenCart } from '../../redux/cart/cart.selectors'
const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>

        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT{' '}
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {/* If hidden is true, render nothing else rnder dropdown */}
      {hidden ? null : <CartDropdown />}
    </div>
  )
}

/*
 * state=> Top level (Root Reducer)
 * .user => user Value within the root Reducer
 * .currentUser=> user Reducer 
 https://react-redux.js.org/api/connect#mapstatetoprops-state-ownprops--object

 * createStructuredSelector=> Helps combine multiple selector in a state and makes our code neater
 */

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHiddenCart,
})
export default connect(mapStateToProps)(Header)
