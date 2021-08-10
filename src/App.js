import { Switch, Route, BrowserRouter } from 'react-router-dom'

import './App.css'
import HomePage from './pages/homepage/homepage.component'
const HatsPage = () => (
  <div>
    <h2>Hats Page</h2>
  </div>
)
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/hats' component={HatsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
