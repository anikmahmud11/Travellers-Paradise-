import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import './Service.css'

const Service = ({ service }) => {
  const cartIcon= <FontAwesomeIcon icon={faShoppingCart} />
    const {id, image, name, description , rating, duration, price} = service;
    return (
        <div className="card-group ">
  <div className="card">
    <img src={image} className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-start">{name}</h5>
      <p className="card-text text-start">{description}</p>
      <h6 className="rating"> <Rating
            initialRating={rating}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly></Rating></h6>
      <p className="card-text text-start">{duration}</p>
      <p className="card-text text-start">Price: ${price}</p>
    </div>
    <Link to={`/placeorder/${id}`}>
    <Button className="bg-success w-50 container mb-2">{cartIcon} Book</Button>
    </Link>
  </div>
</div>
    );
};

export default Service;