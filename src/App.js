import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import Home from "./components/Home.js";
import Cart from "./components/Cart.js";
import Products from "./components/Products.js";
import ProductDetails from "./components/ProductDetails.js";

import './styles/styles.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={() => <Home/>} />
          <Route path="/cart" exact component={() => <Cart/>} />
          <Route path="/products" exact component={() => <Products/>} />
          <Route path="/productDetails" exact component={() => <ProductDetails/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
