import React from 'react';

const HomePage = () => (
  <div>
    {/* Move to its own compnent once I have the gallery working */}
    <div className="home__gallery">
      <img src="/images/cover.jpeg" width="100%" height="100%" />
    </div>
    <div className="home__content">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  </div>
);

export default HomePage;
