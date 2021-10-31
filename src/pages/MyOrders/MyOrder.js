import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';



const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    // delete user
    const handleDeleteOrder = id =>{
        fetch(`http://localhost:5000/orders/${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
          if(data.deletedCount>0){
            alert('deleted successfully')
           const remainingOrders= orders.filter(order=>order._id !== id) ;
           setOrders(remainingOrders)
          }
        })
        
      }
     
    return (
        <div>
            <h2 className="text-success m-5 service-header">Your Orders</h2>
            <div className=" services row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 m-0 container-fluid">
                {
                    orders.map(order => <div
                        key={order._id}
                        
                        
                    >
                        <div className="row "> 
  <div className="col-sm-6 container-fluid">
    <div className="card">
      <div className="card-body ">
        <h5 className="card-title text-center">Order Information</h5>
        <img className="w-50" src={order.orders.image} alt="" />
        <p className="text-start">Order-Name: {order.orders.name} </p>
        <p className="text-start">Order-Price: {order.orders.price} </p>
        <p className="text-start">Email: {order.email}  </p>
        <p className="text-start">Shipping-Address:{order.address}   </p>
        <p className="text-start">phone: {order.phone}  </p>
        <Button className=" btn-success ">Go to Payment</Button>
        <br />
        <Button onClick={()=>handleDeleteOrder(order._id)} className=" btn-success mt-1">Delete Booking</Button>
      </div>
    </div>
  </div>
</div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrder ;

