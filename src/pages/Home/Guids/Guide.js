import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/Guids/kazi-mizan-bfReptWpKEg-unsplash.jpg'
import img2 from '../../../images/Guids/khan-nirob-Vd0ZWkXI4mw-unsplash.jpg'
import img3 from '../../../images/Guids/prio-islam-wejZirjY05Y-unsplash.jpg'
import img4 from '../../../images/Guids/rahabi-khan-eNafqf_0ZWQ-unsplash.jpg'
const Guide = ({ service }) => {
    return (
        <div className="m-5" id="guide">
            <h1 className="text-success">Tour Guids</h1>
            <p>We have some professional tour gide for making your trip more enjoyable. </p>
             <Carousel fade className="w-50 container-fluid">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Amit</h3>
      <p>Professional Guid </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Arpita</h3>
      <p>Guide for women team</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Rubel</h3>
      <p>Guide for Bandorban area </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img4}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Sayed khan</h3>
      <p>Guide for Cox's Bazar </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Guide;