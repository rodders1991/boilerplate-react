import React from 'react';
import { Link } from 'react-router-dom';

const Promotion = (props) => (
  <div className="promotion">
    <img className="promotion__img" src={props.image} />
    <h2>{props.title}</h2>
    <p>{props.content}</p>
    <Link to={props.link} />
  </div>
);

export default Promotion;
