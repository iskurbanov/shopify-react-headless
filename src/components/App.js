import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import Navbar from '../components/Navbar'
import Cart from '../components/Cart'
import NavMenu from '../components/NavMenu'
import Footer from './Footer'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <NavMenu />
        <Cart />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
