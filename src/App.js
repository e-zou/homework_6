// Pages
import Navigation from "./components/Navigation.js";
import Home from "./components/Home.js";
import Cart from "./components/Cart.js";
import Products from "./components/Products.js";
import ProductDetails from "./components/ProductDetails.js";
import Footer from "./components/Footer.js";

// React
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router';

// Styles
import './styles/styles.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function App({ current }) {
  console.log(current);
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={() => <Home/>} />
          <Route path="/cart" exact component={() => <Cart/>} />
          <Route path="/products" exact component={() => <Products/>} />
          {!current ? (
            <Redirect to="/products" />
          ) : (
            <Route exact path="/products/:id" component={ ()=> <ProductDetails/> }/>
          )}
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
