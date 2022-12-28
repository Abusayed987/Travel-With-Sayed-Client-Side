import React from 'react';
import { FaCaretRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="hero lg:w-5/6 md:w-5/6 sm:w-full mx-auto mt-24">
                <div className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse ">
                    <img src="https://dynamic.com.bd/public/assets/img/home.jpg" className=" lg:w-1/2 md:w-1/2 sm:w-4/6 shadow-2xl md:h-64 sm:h-64 lg:h-80" alt='img' />
                    <div className=' lg:w-1/2 md:w-1/2 sm:w-4/6'>
                        <div className=' w-7  h-1 rounded-sm mb-5 bg-yellow-500'></div>
                        <h2 className="text-5xl font-bold">About Me?</h2>
                        <p className="py-6">I am Abu Sayed, I love traveling with with people who love to travel.
                            I have traveled 20+ countries in the last two years and Traveled more than 150 people!
                            If you want to experience the whole world, you can travel with me...</p>
                        <Link className="btn btn-sm sm:btn-sm md:btn-md lg:btn-md bg-yellow-500 text-white text-lg  hover:text-white border-none hover:drop-shadow-2xl hover:bg-cyan-800">Read More<FaCaretRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;