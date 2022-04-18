import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { serviceId } = useParams();

    const [services, setServices] = useState([]);


    async function fetchSevices() {
        const response = await fetch('services.json');
        const res = await response.json();
        return res;
    }
    fetchSevices().then(data => {
        console.log(data)
    });


    return (
        <div>
            {serviceId}
        </div>
    );
};

export default CheckOut;