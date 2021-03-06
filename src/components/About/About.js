import React, { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    return (
        <div className='body-container'>
            <div className="col-sm-12 m-4 col-lg-6 mx-auto card mb-3">
                <img className="card-img-top" src="https://i.ibb.co/D9BTGyD/my.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h3 className="card-title">Rakibul Hasan Moni</h3>
                    <p className="card-text">I want to be a web developer. After finishing the daily modules, I am preparing very well so that I can become a good developer. I am doing everything by routine every day. Inshallah I will stick like this before reaching the final destination.</p>
                </div>
            </div>
        </div>
    );
};

export default About;