import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='w-100 bg-primary py-3 text-white'>
            MK Photography © {year}
        </div>
    );
};

export default Footer;