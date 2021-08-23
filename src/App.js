import { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css'
import Header from './components/header/header.component'

// Pages
import HomePage from './pages/homepage/home-page'
import ShopPage from './pages/shop/shop.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up-page'
import CheckoutPage from './pages/checkout/checkout.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'
class App extends Component {
  // Handle User Signin and signout on firebase
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //  If user exist
      if (userAuth) {
        // Get userRef profile from the createUser method
        const userRef = await createUserProfileDocument(userAuth)

        // Check userRef snapshopt for change in data and get the first state of the data
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      }
      // Set user to null if logged out}
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    )
  }
}

/* 
* Our component will receive dispatch
https://react-redux.js.org/api/connect#mapdispatchtoprops-object--dispatch-ownprops--object 
* null is passed into connect because the state is not actually being used by App Component.
*/
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
