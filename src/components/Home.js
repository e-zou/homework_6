import '../styles/styles.css';
import '../styles/home.css';

import img1 from '../images/home/item1.png';
import img2 from '../images/home/item2.png';
import img3 from '../images/home/item3.png';

import { Link, withRouter } from "react-router-dom";


function Home() {
  return (
    <div className="home">
      <body>

      <div class="hero">
          <div class="overlay">
              <h1 class="hero-header">Muddy Paws<br/>Adventure</h1>
              <h3 class="hero-tagline">Hand-crafted and ethically-made <br/>custom pet gear</h3>
              <div class="shop-now-button"><Link to="/products">
                      <p>SHOP NOW</p>
                  </Link></div>
          </div>
      </div>

      <section class="featured">

          <h2 class="section-header">FEATURED</h2>
          <div class="featured-wrapper">
              <div class="featured-card">
                  <img src={img1} alt="dog"/>
                  <h4>Lovely</h4>
                  <h5>Crafted with love from local artists in Pittsburgh</h5>
              </div>
              <div class="featured-card">
                  <img src={img2} alt="cat"/>
                  <h4>Fall. Festive.<br/>Fitting.</h4>
                  <h5>Astonishing fall collection available for preorder</h5>
              </div>
              <div class="featured-card">
                  <img src={img3} alt="bowl"/>
                  <h4>Comfortable</h4>
                  <h5>Your pet deserves the ultimate comfort</h5>
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

export default Home;
