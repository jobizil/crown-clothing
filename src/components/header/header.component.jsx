import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
const Header = ({ currentUser }) => {
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
      </div>
    </div>
  )
}

/*
 * state=> Top level (Root Reducer)
 * .user => user Value within the root Reducer
 * .currentUser=> user Reducer 
 https://react-redux.js.org/api/connect#mapstatetoprops-state-ownprops--object
 */

const mapStateToProps = state => {
  return { currentUser: state.user.currentUser }
}

export default connect(mapStateToProps)(Header)
