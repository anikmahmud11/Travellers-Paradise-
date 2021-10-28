import React from 'react';

const Service = ({ service }) => {
    const {image, name, description , rating, duration, price} = service;
    return (
        <div className="card-group ">
  <div className="card">
    <img src={image} className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-start">{name}</h5>
      <p className="card-text text-start">{description}</p>
      <p className="card-text text-end">{rating}</p>
      <p className="card-text text-start">{duration}</p>
      <p className="card-text text-start">{price}</p>
    </div>
  </div>
</div>
    );
};

export default Service;