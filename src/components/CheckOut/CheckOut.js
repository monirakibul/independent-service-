import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { serviceId } = useParams();

    const [services, setServices] = useState([]);
    const [serviceDetails, setServiceDetails] = useState([]);


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/monirakibul/ema-jhon-auth-simple/main/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    useEffect(() => {
        for (const service of services) {
            if (service.id == serviceId) {
                setServiceDetails(service)
            }
        }
    }, [services])

    return (
        <div className='body-container'>
            <div className="col-sm-12 m-4 col-lg-6 mx-auto card mb-3">
                <img className="card-img-top" src={serviceDetails.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{serviceDetails.name}</h5>
                    <p className="card-text">{serviceDetails.description}</p>
                    <p className="card-text">Price: {serviceDetails.price}$</p>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;