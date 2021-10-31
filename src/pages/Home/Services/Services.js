import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" >
        <h2 className="text-success m-5 service-header">Our Packages</h2>
        <div className=" services row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0 container-fluid">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    </div>
    );
};

export default Services;