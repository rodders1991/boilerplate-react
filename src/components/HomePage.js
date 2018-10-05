import React from 'react';

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
        <div className="promotion__content">
          <p> tstetstaysuduysad </p>
        </div>
        <img className="promotion__img" src="/images/article3.jpg" />
      </div>
    </div>
  );
};

export default HomePage;
