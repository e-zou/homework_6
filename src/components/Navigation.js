import logo from '../images/logo.png';
import shoppingCart from '../images/shopping-cart.png';
import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
    <div class="nav-container">
        <nav>
            <div class="logo"><Link to="/"><img src={logo}  alt="logo"/></Link></div>
            <div class="menu">
                <Link to="/mission">
                    <p>Mission</p>
                </Link>
                <Link to="/stores">
                    <p>Stores</p>
                </Link>
                <Link to="/products">
                    <p>Products</p>
                </Link>
                <Link class="cart-icon" to="/cart"><img src={shoppingCart} alt="shopping_cart_icon"/>
                    <div class="notif">
                        <p>3</p>
                    </div>
                </Link>
            </div>
        </nav>
    </div>
    )
}

export default withRouter(Navigation);