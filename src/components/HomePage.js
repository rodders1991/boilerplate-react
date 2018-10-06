import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
      {/* Move to its own component once I have the gallery working */}
      <div className="home__gallery">
        <img src="/images/cover.jpg" width="100%" height="100%" />
      </div>
      <div className="home__content">
        <h2>Welcome to Ruislip Stars Nurseries</h2>
        <p>At Ruislip Stars Nurseries, we believe that childhood, particularly the early years, is a very precious time. Our philosophy is that every child deserves the best possible start in life.</p>
      </div>
      <div className="home__promotion">
        <img className="promotion__img" src="/images/article3.jpg" />
        <div className="promotion__content">
          <h2> Why Ruislip Stars ? </h2>
          <p>We are a team of qualified and dedicated practitioners who are committed to providing the best possible care for children.</p>
          <div className="promotion__link__container">
            <Link to="/about" className="promotion__link">Find out more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
