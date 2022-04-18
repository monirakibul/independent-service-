import React from 'react';
import pic1 from './../../Images/pic1.jpg';
import pic2 from './../../Images/pic2.jpg';
import pic3 from './../../Images/pic3.jpg';
import pic4 from './../../Images/pic4.jpg';
import pic5 from './../../Images/pic5.jpg';
import pic6 from './../../Images/pic6.jpg';

const Gallary = () => {
    return (
        <div className='my-4'>
            <h2 className='text-center m-3'>Recently Clicked</h2>
            <div class="container mb-5 mx-auto row g-5">
                <div class="col-lg-4 col-sm-12 col-md-6">
                    <img className='img-fluid' src={pic1} alt="" />
                </div>
                <div class="col-lg-4 col-sm-12 col-md-6">
                    <img className='img-fluid' src={pic2} alt="" />
                </div>
                <div class="col-lg-4 col-sm-12 col-md-6">
                    <img className='img-fluid' src={pic3} alt="" />
                </div>
                <div class="col-lg-4 col-sm-12 col-md-6">
                    <img className='img-fluid' src={pic4} alt="" />
                </div>
                <div class="col-lg-4 col-sm-12 col-md-6">
                    <img className='img-fluid' src={pic5} alt="" />
                </div>
                <div class="col-lg-4 col-sm-12 col-md-6">
                    <img className='img-fluid' src={pic6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallary;