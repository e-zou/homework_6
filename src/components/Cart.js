import '../styles/styles.css';
import '../styles/shopping-cart.css';

import item1 from '../images/products/item1.png';
import item2 from '../images/products/item2.png';
import item3 from '../images/products/item3.png';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cart() {
  return (
    <div className="cart-container">
      <body>
        <section class="shopping-cart-container">
        <div class="cart-wrapper">
            <h2>Your Shopping Cart</h2>
            <div class="items-card">
              <div class="item-info">
                <img class="item-img" src={item1}/>
                <div class="item-text">
                    <div class="title-price">
                      <h4 class="title">Jeweled Collar </h4>
                      <h4 class="price">$19.99</h4>
                    </div>
                    <div class="stars">
                      <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                      <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                      <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                      <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                      <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                    </div>
                    <p class="description">Stylish and dazzling jewels securly embedded into a black,
leather collar...</p>
                    <p><span class="bold">Color: </span> Red</p>
                    <p><span class="bold">Size: </span> Small</p>
                </div>

              </div>
              <button class="delete"><p>DELETE</p></button>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default Cart;

