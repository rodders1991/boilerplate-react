import React from 'react';
import { Link } from 'react-router-dom';

const Promotion = (props) => (
  <div className="promotion">
    <div className="promotion-img-container">
      <img className="promotion__img" src={props.image} />
    </div>
    <h2 className="promotion__title">{props.title}</h2>
    <p className="promotion__content">{props.children}</p>
    <Link className="promotion__link" to={props.link}>Read More</Link>
  </div>
);

export default Promotion;
