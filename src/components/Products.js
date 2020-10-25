import '../styles/styles.css';
import '../styles/products.css';

import blackCart from '../images/black-cart.png';
import arrow from '../images/products/sort-arrow.png';
import item1 from '../images/products/item1.png';
import item2 from '../images/products/item2.png';
import item3 from '../images/products/item3.png';
import item4 from '../images/products/item4.png';
import item5 from '../images/products/item5.png';
import item6 from '../images/products/item6.png';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Link, withRouter } from "react-router-dom";

function Products() {
    return(
    <div class="products-container">

        <body>
      
        <section class="products">
            <div class="products-wrapper">
                <h2>PRODUCTS</h2>
                {/* <!-- Filters --> */}
                <div class="filters">
                    <div class="filter-item">
                        <p class="filter-label">ANIMALS</p>
                        <img src={arrow} alt="arrow"/>
                    </div>
                    <div class="filter-item">
                        <p class="filter-label">TYPE</p>
                        <img src={arrow} alt="arrow"/>
                    </div>
                    <div class="filter-item">
                        <p class="filter-label">SIZE</p>
                        <img src={arrow} alt="arrow"/>
                    </div>
                    <div class="filter-item">
                        <p class="filter-label">SORT BY</p>
                        <img src={arrow} alt="arrow"/>
                    </div>
                </div>
                {/* <!-- Gallery Section --> */}
                <div class="product-gallery">
                    {/* <!-- Product 1 --> */}
                    <div class="product-card">
                        <Link to="/productDetails"><img src={item1} alt="item1"/></Link>
                        <div class="product-text">
                            <div class="name-and-price">
                                <p class="name">Jeweled Collar</p>
                                <p class="price">$59.99</p>
                            </div>
                            <div class="rating-and-cart">
                                <div class="rating">
                                    <div class="stars">
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        {/* <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span> */}
                                    </div>
                                    <p class="review">- 230</p>
                                </div>
                                <a href="#"><img src={blackCart} alt="cart" class="cart"/></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Product 2 --> */}
                    <div class="product-card">
                        <Link to="/productDetails"><img src={item2} alt="item2"/></Link>
                        <div class="product-text">
                            <div class="name-and-price">
                                <p class="name">Jojo Harness</p>
                                <p class="price">$44.99</p>
                            </div>
                            <div class="rating-and-cart">
                                <div class="rating">
                                    <div class="stars">
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>

                                    </div>
                                    <p class="review">- 213</p>
                                </div>
                                <a href="#"><img src={blackCart} alt="cart" class="cart"/></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Product 3 --> */}
                    <div class="product-card">
                        <Link to="/productDetails"><img src={item3} alt="item3"/></Link>
                        <div class="product-text">
                            <div class="name-and-price">
                                <p class="name">Luxury Cat Collar</p>
                                <p class="price">$39.99</p>
                            </div>
                            <div class="rating-and-cart">
                                <div class="rating">
                                    <div class="stars">
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                    </div>
                                    <p class="review">- 143</p>
                                </div>
                                <a href="#"><img src={blackCart} alt="cart" class="cart"/></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Product 4 --> */}
                    <div class="product-card">
                        <Link to="/productDetails"><img src={item4} alt="item4"/></Link>
                        <div class="product-text">
                            <div class="name-and-price">
                                <p class="name">Choco Harness</p>
                                <p class="price">$59.99</p>
                            </div>
                            <div class="rating-and-cart">
                                <div class="rating">
                                    <div class="stars">
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                    </div>
                                    <p class="review">- 54</p>
                                </div>
                                <a href="#"><img src={blackCart} alt="cart" class="cart"/></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Product 5 --> */}
                    <div class="product-card">
                        <Link to="/productDetails"><img src={item5} alt="item5"/></Link>
                        <div class="product-text">
                            <div class="name-and-price">
                                <p class="name">Basic Cat Collar</p>
                                <p class="price">$34.99</p>
                            </div>
                            <div class="rating-and-cart">
                                <div class="rating">
                                    <div class="stars">
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                    </div>
                                    <p class="review">- 234</p>
                                </div>
                                <a href="#"><img src={blackCart} alt="cart" class="cart"/></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Product 6 --> */}
                    <div class="product-card">
                        <Link to="/productDetails"><img src={item6} alt="item6"/></Link>
                        <div class="product-text">
                            <div class="name-and-price">
                                <p class="name">Colorful Food Bowl</p>
                                <p class="price">$59.99</p>
                            </div>
                            <div class="rating-and-cart">
                                <div class="rating">
                                    <div class="stars">
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                    </div>
                                    <p class="review">- 135</p>
                                </div>
                                <a href="#"><img src={blackCart} alt="cart" class="cart"/></a>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </section>
    
        {/* <!--  Footer --> */}
        <div class="footer">
            <div class="footer-info">
                <p>© MPA Inc. 2020</p>
                <p>Contact:<a href="jenferson@mpa.com"> jenferson@mpa.com</a></p>
            </div>
        </div>
    </body>
    </div>
    );
   


}

export default Products;