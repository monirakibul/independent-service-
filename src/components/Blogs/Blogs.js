import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <div className='my-3' id='blogs'>
            <h2 className='text-center mb-4'>Blogs</h2>
            <div className="container mb-5 mx-auto row gy-5">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;