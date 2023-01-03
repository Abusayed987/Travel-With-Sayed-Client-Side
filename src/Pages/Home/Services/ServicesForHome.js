import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
const ServicesForHome = () => {
    const [servicesForHome, setServicesForHome] = useState([])
    useEffect(() => {
        fetch('https://travel-with-sayed-server.vercel.app/servicesForHome')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServicesForHome(data)
            })
    }, [])
    return (
        <div>
            <div className=' md:mt-20 lg:mt-20'>
                <h1
                    className='text-4xl my-8 font-bold text-cyan-700 text-center'
                >My <span className='text-cyan-500 text-5xl'>S</span>ervices
                </h1>
                <div className=' mx-auto w-3/12 mb-5  h-1 rounded-sm  bg-cyan-700'></div>
            </div>

            <div>
                <img
                    className=' w-11/12 md:w-4/6 lg:w-4/6 md:my-20 lg:my-20 rounded-xl mx-auto '
                    src="https://ik.imagekit.io/w13m3d3rhif/web/campaign/season-of-travel/season-of-travel-lg.png?tr=f-auto,h-280,pr-true" alt="" />
            </div>
            <div className='grid gap-4 place-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20'>
                {
                    servicesForHome.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServicesForHome;