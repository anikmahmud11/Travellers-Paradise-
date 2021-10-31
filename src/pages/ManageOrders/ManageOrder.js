
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ManageOrder = () => {
    const[orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('https://scary-flesh-21850.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data =>setOrders(data))
        
    },[])
    console.log(orders);
    // delete user
    const handleDeleteOrder = id => {
        fetch(`https://scary-flesh-21850.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remainingOrders = orders.filter(order => order._id !== id);
                    setOrders(remainingOrders)
                }
            })

    }
  
    return (
        <div>
           {
               orders.map(order=><div
               key={order._id}
               className="container w-50  border border-success"
               >
                      
                  <ul>
                       <li className="text-start"> User-Email :{order.email}</li>
                       <li className="text-start">Order-Name:{order.orders.name}</li>
                       <Button onClick={() => handleDeleteOrder(order._id)}>DELETE</Button>
                   </ul>
                  
               </div>)
           }
                   
        </div>
    );
};

export default ManageOrder;