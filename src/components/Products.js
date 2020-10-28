import '../styles/styles.css';
import '../styles/products.css';

import blackCart from '../images/black-cart.png';
import arrow from '../images/products/sort-arrow.png';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Link } from "react-router-dom";

// redux
import { connect } from 'react-redux';
import {
    addToCart,
    loadCurrentItem,
} from "../redux/shopping/shopping-actions";


function Products({ products, addToCart, loadCurrentItem }) {
    return (
        <div class="products-container">
            <body>
                <section class="products">
                    <div class="products-wrapper">
                        <h2>PRODUCTS</h2>
                        {/* <!-- Filters --> */}
                        <div class="filters">
                            <div class="filter-item">
                                <p class="filter-label">ANIMALS</p>
                                <img src={arrow} alt="arrow" />
                            </div>
                            <div class="filter-item">
                                <p class="filter-label">TYPE</p>
                                <img src={arrow} alt="arrow" />
                            </div>
                            <div class="filter-item">
                                <p class="filter-label">SIZE</p>
                                <img src={arrow} alt="arrow" />
                            </div>
                            <div class="filter-item">
                                <p class="filter-label">SORT BY</p>
                                <img src={arrow} alt="arrow" />
                            </div>
                        </div>
                        {/* <!-- Gallery Section --> */}
                        <div class="product-gallery">
                            {/* <!-- Product 1 --> */}
                            {products.map(prod =>
                                <div class="product-card">
                                    <Link onClick={() => loadCurrentItem(prod)} to={`/products/${prod.id}`}>
                                  
                                            <img src={prod.img} alt="item1" />
                                       
                                    </Link>
                                    <div class="product-text">
                                        <div class="name-and-price">
                                            <p class="name">{prod.title}</p>
                                            <p class="price">${prod.price}</p>
                                        </div>
                                        <div class="rating-and-cart">
                                            <div class="rating">
                                                <div class="stars">
                                                    <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                    <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                    <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                    <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                    <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                </div>
                                                <p class="review"> - {prod.numReviews}</p>
                                            </div>
                                            <button onClick={() => addToCart(prod.id)}>
                                                <img src={blackCart} alt="cart" class="cart" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            )}



                        </div>
                    </div>
                </section>
            </body>
        </div>
    );



}

// tells to get it from the store
const mapStateToProps = state => {
    return {
        // inside root reducer, we named it shop
        products: state.shop.products,
    }
}

// dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);