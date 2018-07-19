import React from 'react';
import Promotion from './Promotion';

const HomePage = () => {
  return (
    <div>
      {/* Move to its own component once I have the gallery working */}
      <div className="home__gallery">
        <img src="/images/cover.jpg" width="100%" height="100%" />
      </div>
      <div className="home__content">
        <Promotion
          image="/images/article1.jpg"
          title="About us"
          content="tetststtststtststststs"
          link="/"
        />
        <Promotion
          image="/images/article2.jpg"
          title="Sign up"
          content="tetststtststtststststs"
          link="/"
        />
        <Promotion
          image="/images/article3.jpg"
          title="Contact us"
          content="tetststtststtststststs"
          link="/"
        />
      </div>
    </div>
  );
};

export default HomePage;
