import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
  const { serviceId } = useParams();
  const [serviceDetails, setServiceDetails] = useState([])
  const [singleService, setSingleService] = useState({})
  

  useEffect(() => {
    fetch('http://localhost:5000/details')
      .then(res => res.json())
      .then(data => setServiceDetails(data))
    // console.log(serviceDetails);
  }, [])

  useEffect(() => {
    const foundService = serviceDetails.find(details => details.id == serviceId)

    setSingleService(foundService);

  }, [serviceDetails])


  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { user } = useAuth();
  const onSubmit = data => {
    const service = singleService;
    data.orders= service;
    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {

        if (result.insertedId) {

          alert('Order process successfully')
          reset();

        }
      })
  };
  // console.log(singleService);
  return (
    <div>
      <h1 className="m-2 mb-5 text-success">Book Your Package</h1>
      <div className="place-order" >
        <div className="mb-2 container">
          <h4 className="text-success">Fill the form for booking</h4>
          <img className="w-25" src={singleService?.image} alt="" />
          <form className="placeOrder-form container  m-0" onSubmit={handleSubmit(onSubmit)}>

        <input defaultValue={user.displayName} {...register("name")} />

        <input defaultValue={user.email} {...register("email", { required: true })} />
        {errors.email && <span className="error">This field is required</span>}
        <input placeholder="Address" defaultValue="" {...register("address")} />
        <input placeholder="City" defaultValue="" {...register("city")} />
        <input placeholder="phone number" defaultValue="" {...register("phone")} />

        <input type="submit" />
    </form>
        </div>



      </div>
    </div>
  );
};

export default PlaceOrder;