import { data } from 'autoprefixer';
import { FaCaretRight } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data)
            })
    }, [])
    return (
        <div>
            <div className='mt-32'>
                <h1
                    className='text-4xl my-8 font-bold text-cyan-700 text-center'
                > <span className='text-cyan-500 text-5xl'>S</span>ervices For Popular Destinations
                </h1>
            </div>
            <div>
                <img className='w-4/6 mb-28 rounded-xl mx-auto' src="https://ik.imagekit.io/w13m3d3rhif/web/campaign/season-of-travel/season-of-travel-lg.png?tr=f-auto,h-280,pr-true" alt="" />
            </div>
            <div className='grid gap-4 place-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center my-12'>
                <Link className="btn btn-sm sm:btn-sm md:btn-md lg:btn-md bg-yellow-500 text-white text-lg  hover:text-white border-none hover:drop-shadow-2xl hover:bg-cyan-800">See All<FaCaretRight /></Link>
            </div>
        </div>
    );
};

export default Services;