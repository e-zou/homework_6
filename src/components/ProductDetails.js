import '../styles/styles.css';
import '../styles/product-details.css';

import bigImage from '../images/product-details/detail1.png';
import smallImg1 from '../images/product-details/small-detail1.png';
import smallImg2 from '../images/product-details/small-detail2.png';
import arrow from '../images/products/sort-arrow.png';
import cart from '../images/white-cart.png';
import { useStore } from 'react-redux';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect, useSelector } from "react-redux";
import { addToCart, changeColor, changeSize } from "../redux/shopping/shopping-actions";
import React, { useState } from 'react';


function ProductDetails({ current, addToCart, changeColor, changeSize }) {
    // console.log(current);


    let colorDict = {
        "strawberry": current.img,
        "blackberry": smallImg1,
        "purpleberry": bigImage,
        "fire orange": smallImg2,
    }



    return (
        <div class="product-details-container">

            <body>
                {/* <!--  Details Section --> */}
                <section class="details">
                    <div class="details-wrapper">
                        {/* <!-- Title, Price, Reviews --> */}
                        <div class="detail-heading">
                            <div class="detail-title">
                                <div class="detail1">
                                    <h2>{current.title}</h2>
                                    <p>${current.price}</p>
                                </div>
                                <div class="detail2">
                                    <div class="stars">
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                        <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                    </div>
                                    <div class="review-num">-{current.numReviews} reviews</div>
                                </div>
                            </div>
                            {/* <!-- Shopping Cart Button --> */}
                            <div class="shopping-cart-btn">
                                <button onClick={() => addToCart(current.id)} class="shopping-cart-button">
                                    <img src={cart} alt="shopping cart" />
                                </button>
                                <p>Add to Cart</p>
                            </div>
                        </div>
                        {/* <!-- Other information --> */}
                        <div class="detail-columns">
                            {/* <!-- Gallery and Reviews on the left of page --> */}
                            <div class="left-column">
                                <div class="gallery">
                                    <div class="img-crop">
                                        <img class="big_image" src={colorDict[current.color]} alt="big_image" />
                                    </div>
                                    <img class="small_image1" src={smallImg1} alt="small_image" />
                                    <img class="small_image2" src={smallImg2} alt="small_image2" />
                                </div>
                                <div class="review-section">
                                    <h2>REVIEWS</h2>
                                    <div class="review-card">
                                        <div class="name-and-stars">
                                            <div class="name">mark029</div>
                                            <div class="stars">
                                                <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                            </div>
                                        </div>
                                        <p class="title">“Wow this was the best product ever!”</p>
                                        <p class="comment">I loved the colors and material that these were made out of. It’s super secure and I’ve been using it for a whole year.
                                    </p>
                                    </div>
                                    <div class="review-card">
                                        <div class="name-and-stars">
                                            <div class="name">daisychan</div>
                                            <div class="stars">
                                                <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                            </div>
                                        </div>
                                        <p class="title">“Everything looked just like expected”</p>
                                        <p class="comment">From the color to the fit, everything was there. I would highly recommend buying these products especially if they are on sale.
                                    </p>
                                    </div>
                                    <div class="review-card">
                                        <div class="name-and-stars">
                                            <div class="name">janiejet</div>
                                            <div class="stars">
                                                <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                                <FontAwesomeIcon color="#D9CC5E" icon={faStar} />
                                            </div>
                                        </div>
                                        <p class="title">“Size runs a little bit small, but looked amazing!”</p>
                                        <p class="comment">I brought a small for my Shiba Inu, but it ended up being a little too small. After exchanging for a bigger size, it looks great.
                                    </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Gallery description on the right of page --> */}
                            <div class="right-column">
                                <div class="description">
                                    <h4>Details</h4>
                                    <p>Stylish and dazzling jewels securly embedded into a black, leather collar</p>
                                    <ul>
                                        <li> Collar does not stretch, so please leave 2 fingers between collar and dog neck. A proper distance won’t leave any room for dog to chew. </li>
                                        <li>Collar is not for tie out, so do not leave your dog unattended with this collar on</li>
                                        <li>Made with 100% recycled leather and eco-friendly plastic for jewels</li>
                                        <li>Choose from multiple colors</li>
                                    </ul>
                                    {/* <!-- Sizes: Tiny, Small, Medium, Large --> */}
                                    <div class="size">
                                        <h5>Size: </h5>
                                        <button class="size-btn" onClick={() => changeSize(current.id, "small")}>SMALL</button>
                                        <button class="size-btn" onClick={() => changeSize(current.id, "medium")}>MEDIUM</button>
                                        <button class="size-btn" onClick={() => changeSize(current.id, "large")}>LARGE</button>
                                    </div>
                                    {/* <!-- Colors: Strawberry, Blackberry, Crazyberry, Fire Orange --> */}
                                    <div class="product-color-wrapper">
                                        <h5>Color: </h5>
                                        <button class="product-color" id="color1"
                                            value="1" onClick={() => changeColor(current.id, "strawberry")}></button>
                                        <button class="product-color" id="color2" value="2" onClick={() => changeColor(current.id, "blackberry")}></button>
                                        <button class="product-color" id="color3" value="3" onClick={() => changeColor(current.id, "crazyberry")}></button>
                                        <button class="product-color" id="color4" value="4" onClick={() => changeColor(current.id, "fire orange")}></button>
                                    </div>

                                    <div>
                                        <p>Selecting: {current.size}, {current.color}</p>
                                        <button onClick={() => addToCart(current.id)} class="">ADD TO CART
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </body>


        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        current: state.shop.currentItem,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        changeColor: (id, value) => dispatch(changeColor(id, value)),
        changeSize: (id, value) => dispatch(changeSize(id, value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);