import React from 'react';
import { FaCaretRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <div className='text-center my-12'>
                <Link to='/services' className="btn btn-sm sm:btn-sm md:btn-md lg:btn-md bg-yellow-500 text-white text-lg  hover:text-white border-none hover:drop-shadow-2xl hover:bg-cyan-800">See All<FaCaretRight /></Link>
            </div>
        </div>
    );
};

export default Home;