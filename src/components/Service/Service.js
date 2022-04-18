import React from 'react';

const Service = (props) => {
    const { name, img, price, quantity, description, hour } = props.service;
    return (
        <div className="col-lg-4 col-sm-12 col-md-6">
            <div class="card">
                <img class="card-img-top" src={img} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    );
};

export default Service;