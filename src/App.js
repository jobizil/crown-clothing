import { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/home-page'
import ShopPage from './pages/shop/shop-page'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up-page'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
    }
  }
  // Handle User Signin and signout on firebase
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //  If user exist
      if (userAuth) {
        // Get userRef profile from the createUser method
        const userRef = await createUserProfileDocument(userAuth)

        // Check userRef snapshopt for change in data and get the first state of the data
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          })
        })
      } else {
        // Set user to null if logged out
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <Router>
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInSignUpPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App
