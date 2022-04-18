import React, { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    return (
        <div className='body-container'>
            aabout
        </div>
    );
};

export default About;