import React from 'react';

const NotFound = () => {
    return (
        <div className='d-flex flex-column body-container  align-items-center justify-content-center '>
            <h1 class="font-bold text-dander">404</h1>
            <h4 class="mb-2 font-bold text-center">
                <span class="text-danger">Oops!</span> Page not found
            </h4>
        </div>
    );
};

export default NotFound;