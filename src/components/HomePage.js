import React from 'react';

const HomePage = () => (
  <div>
    {/* Move to its own compnent once I have the gallery working */}
    <div className="home__gallery">
      <img src="/images/cover.jpg" width="100%" height="100%" />
    </div>
    <div className="home__content">
      <div className="circle">
        <img src="/images/article1.jpg" />
      </div>
      <div className="circle">
        <img src="/images/article2.jpg" />
      </div>
      <div className="circle">
        <img src="/images/article3.jpg" />  
      </div>
    </div>
  </div>
);

export default HomePage;
