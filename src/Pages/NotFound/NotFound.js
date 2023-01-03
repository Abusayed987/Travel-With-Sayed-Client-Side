import React from 'react';
import { Link } from 'react-router-dom';
import useTittle from '../../hooks/UseTittle';

const NotFound = () => {
    useTittle('404')
    return (
        <div className=''>
            <img
                className=' w-1/2 mx-auto my-20'
                src="https://sharetrip.net/assets/images/no_page_found_screen_illustration_1x.png" alt="" />
            <div className=' text-center'>
                <h3 className='text-2xl font-semibold'>Page not found</h3>
                <p className='my-4'>Sorry, the content that you are looking for doesn't exist.</p>
                <Link to='/' className='btn btn-sm rounded-sm  bg-cyan-700 text-white   hover:text-white border-none hover:drop-shadow-2xl hover:bg-cyan-800  '>Go Home</Link>
            </div>
        </div>
    );
};

export default NotFound;