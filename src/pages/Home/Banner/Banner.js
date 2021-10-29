import React from 'react';
import { Carousel } from 'react-bootstrap';


import carousel3  from '../../../images/Carousel/karosel3.jpg';
import carousel6  from '../../../images/Carousel/karosel6.jpg';

import carousel9  from '../../../images/Carousel/karosel9.jpg';
const Banner = () => {
    return (
        <>
            <Carousel className="container-fluid mt-2  "id="carousel" >
  
 
  <Carousel.Item>
    <img
      className="w-100"
      src={ carousel3 }
      alt="Third slide"
    />
    
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="w-100"
      src={ carousel6 }
      alt="Third slide"
    />
    
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="w-100"
      src={ carousel9 }
      alt="Third slide"
    />
    
  </Carousel.Item>
  
</Carousel>
        </>
    );
};

export default Banner;