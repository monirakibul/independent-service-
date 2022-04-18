import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className=''>
            <div className="banner bg-cover text-white">
                <div className=" banner-info py-5">
                    <h1 className="display-4 font-weight-bold text-white">Welcome to MK Photography</h1>
                    <p className=" mb-4 mx-auto header-paragraph">Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever.It remembers little things, long after you have forgotten everything. — Aaron Siskind</p>
                    <a href="#services" role="button" className="btn btn-primary px-5">See All Services</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;