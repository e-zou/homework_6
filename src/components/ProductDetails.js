import '../styles/styles.css';
import '../styles/product-details.css';

import bigImage from '../images/product-details/detail1.png';
import smallImg1 from '../images/product-details/small-detail1.png';
import smallImg2 from '../images/product-details/small-detail2.png';
import arrow from '../images/products/sort-arrow.png';
import cart from '../images/white-cart.png';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductDetails() {
    return(
        <div class="product-details-container">
            
            <body>
            {/* <!--  Details Section --> */}
            <section class="details">
                <div class="details-wrapper">
                    {/* <!-- Title, Price, Reviews --> */}
                    <div class="detail-heading">
                        <div class="detail-title">
                            <div class="detail1">
                                <h2>JEWELLED COLLAR</h2>
                                <p>$59.99</p>
                            </div>
                            <div class="detail2">
                                <div class="stars">
                                    <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                    <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                    <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                    <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                    <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                </div>
                                <div class="review-num">-230 reviews</div>
                            </div>
                        </div>
                        {/* <!-- Shopping Cart Button --> */}
                        <div class="shopping-cart-button">
                            <img src={cart} alt="shopping cart"/>
                        </div>
                    </div>
                    {/* <!-- Other information --> */}
                    <div class="detail-columns">
                        {/* <!-- Gallery and Reviews on the left of page --> */}
                        <div class="left-column">
                            <div class="gallery">
                                <img class="big_image" src={bigImage} alt="big_image"/>
                                <img class="small_image1" src={smallImg1} alt="small_image"/>
                                <img class="small_image2" src={smallImg2} alt="small_image2"/>
                            </div>
                            <div class="review-section">
                                <h2>REVIEWS</h2>
                                <div class="review-card">
                                    <div class="name-and-stars">
                                        <div class="name">mark029</div>
                                        <div class="stars">
                                            <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                            <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                            <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                            <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                            <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
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
                                            <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                            <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                            <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                            <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                            <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
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
                                            <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                            <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                            <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                            <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
                                            <FontAwesomeIcon color="#D9CC5E" icon={faStar}/>
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
                                    <p>MEDIUM</p><img src={arrow} alt="arrow"/>
                                </div>
                                {/* <!-- Colors: Strawberry, Blackberry, Crazyberry, Fire Orange --> */}
                                <div class="product-color-wrapper">
                                    <h5>Color: </h5>
                                    <div class="product-color" id="color1"></div>
                                    <div class="product-color" id="color2"></div>
                                    <div class="product-color" id="color3"></div>
                                    <div class="product-color" id="color4"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


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

export default ProductDetails