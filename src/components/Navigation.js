import logo from '../images/logo.png';
import shoppingCart from '../images/shopping-cart.png';
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import React, { useState, useEffect } from "react";


function Navigation({cart}) {
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        
        if (cart !== null || cart !== undefined) {
            cart.forEach((item) => {
            items += item.qty;
            });
        
            setTotalItems(items);
        }
    }, [cart, totalItems, setTotalItems]);
    

    return (
        <div class="nav-container">
            <nav>
                <div class="logo"><Link to="/"><img src={logo} alt="logo" /></Link></div>
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
                    <Link class="cart-icon" to="/cart"><img src={shoppingCart} alt="shopping_cart_icon" />
                        <div class="notif">
                            <p>{totalItems}</p>
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };

export default connect(mapStateToProps)(withRouter(Navigation));