import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Gallary from '../Gallary/Gallary';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Gallary></Gallary>
            <Services></Services>
            <Blogs></Blogs>
        </>
    );
};

export default Home;