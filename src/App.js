import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css'
import Header from './components/header/header.component'

// Pages
import HomePage from './pages/homepage/home-page'
import ShopPage from './pages/shop/shop-page'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up-page'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'
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
      } else {
        setCurrentUser(userAuth)
        // Set user to null if logged out}
      }
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
          <Route path='/signin' component={SignInSignUpPage} />
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
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})
export default connect(null, mapDispatchToProps)(App)
