import React from 'react';

const Blog = (props) => {
    const { title, description } = props.blog;
    return (
        <div className='col-lg-4 col-sm-12 col-md-6'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;