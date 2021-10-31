
import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const[orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('https://scary-flesh-21850.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data =>setOrders(data))
        
    },[])
    console.log(orders);
  
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
                   </ul>
                  
               </div>)
           }
                   
        </div>
    );
};

export default ManageOrder;