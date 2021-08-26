import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectHiddenCart } from '../../redux/cart/cart.selectors'
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from './header.styles'
const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' /> {/*  Not Referenced */}
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>

        <OptionLink to='/contact'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT </OptionDiv>
        ) : (
          <OptionLink className='option' to='/signin'>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {/* If hidden is true, render nothing else rnder dropdown */}
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
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
