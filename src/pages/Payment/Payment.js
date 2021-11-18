import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51Jw5G9J327mlMhujzKMJBO86NizJ3YrAICL66FVWkYYSl0ZTchRiQpJ0ARFsLOcA5qXlPVnX1fNMqwoBuiwtsGMk00jvA1ryxa')

const Payment = () => {
    


    const {bookingId}=useParams()
    const [orders, setOrders] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/orders/${bookingId}`)
        .then(res=>res.json())
        .then(data=>setOrders(data));
        console.log(orders);
    },[bookingId])
    return (
        <div>
            <h2>payment for : {orders?.name} for{orders?.orders?.name}</h2>
            <h4>Pay:${orders?.orders?.price}</h4>
            {orders?.orders?.price && <Elements stripe={stripePromise}>
      <CheckOutForm
     orders={orders}
      />
    </Elements>}
        </div>
    );
};

export default Payment;