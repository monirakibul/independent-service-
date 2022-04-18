import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';


const Service = (props) => {
    const navigate = useNavigate();
    const { id, name, img, price, quantity, description, hour } = props.service;
    return (
        <div className="col-lg-4 col-sm-12 col-md-6">
            <div class="card">
                <img class="card-img-top" src={img} alt="Card image cap" />
                <div class="card-body">
                    <h3 class="card-title text-primary">{name}</h3>
                    <h6 class="card-price text-center">${price}<span class="period">/hour</span></h6>
                    <hr />
                    <p className='my-0 text-success'><CheckCircleIcon className='hero-icon'></CheckCircleIcon> {hour} Hours</p>
                    <p className='text-success'><CheckCircleIcon className='hero-icon'></CheckCircleIcon> {quantity} Pictures</p>
                    <hr />
                    <p className='mb-3'>{description}</p>
                    <button onClick={() => navigate(`/checkout/${id}`)} className='btn btn-outline-primary'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;