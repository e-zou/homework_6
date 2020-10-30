import React, { useState, useEffect } from "react";

import '../styles/styles.css';
import '../styles/shopping-cart.css';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect } from "react-redux";
// To-Do: adj quantity import { adjustItemQty, removeFromCart } from "../redux/shopping/shopping-actions";
import { removeFromCart } from "../redux/shopping/shopping-actions";

function Cart({ cart, removeFromCart }) {


  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);


  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);


  return (
    <div className="cart-container">
      <body>
        <section class="shopping-cart-container">
          <div class="cart-wrapper">
            <h2>Your Shopping Cart</h2>
            {cart.map((item) => (
              <div class="items-card">
                <div class="item-info">
                  <img class="item-img" src={item.img} alt="item"/>
                  <div class="item-text">
                    <div class="title-price">
                      <h4 class="title">{item.title}</h4>
                      <h4 class="price">${item.price}</h4>
                    </div>
                    <div class="stars">
                      <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                      <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                      <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                      <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                      <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                    </div>
                    <p class="description">{item.desc}</p>
                    <p class="detail"><span class="bold">Color: </span>{item.color}</p>
                    <p class="detail"><span class="bold">Size: </span> {item.size}</p>
                    <p class="detail"><span class="bold">Quantity: </span> {item.qty}</p>
                    {/* <div className="quantity">
                      <label htmlFor="qty">Qty</label>
                      <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                      />
                    </div> */}
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} class="delete"><p>DELETE</p></button>
              </div>
            ))}
          </div>
          <div class="totals">
            <button class="checkout"><p>PURCHASE</p></button>
            <h4>Total Items: {totalItems}</h4>
            <h4>Total Price: ${totalPrice}</h4>
          </div>
        </section>
      </body>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);

