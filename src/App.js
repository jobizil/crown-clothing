import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/home-page'
import ShopPage from './pages/shop/shop-page'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up-page'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
