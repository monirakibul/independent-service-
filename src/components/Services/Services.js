import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='my-3' id='services'>
            <h2 className='text-center mb-4'>My Services</h2>
            <div className="container mb-5 mx-auto row g-5">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;