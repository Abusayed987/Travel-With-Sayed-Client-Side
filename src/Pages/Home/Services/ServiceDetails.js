import React from 'react';
import { FaCalendarDay, FaMapMarkerAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    const {
        _id,
        name,
        packageName,
        days,
        discription,
        img,
        itinerary,
        price,
    } = service;
    console.log(service);

    return (
        <div>
            <div>
                <img
                    className=' w-10/12 mx-auto mt-5 rounded-md'
                    src={img} alt="img" />
                <div>
                    <div className="hero lg:w-5/6 md:w-5/6 sm:w-full mx-auto md:mt-24 lg:mt-24">
                        <div className=" flex justify-center flex-col-reverse  lg:flex-row-reverse md:flex-row-reverse p-5 md:p-0 lg:p-0 ">
                            <div className=" lg:w-1/2 md:w-1/2 sm:w-4/6 shadow-sm border  md:block lg:block mt-8">
                                <h2 className='font-semibold text-xl ml-2 p-2'>Itinerary:</h2>
                                <h3 className=' text-lg p-5'>{discription}</h3>
                            </div>
                            <div className=' lg:w-1/2 md:w-1/2 sm:w-4/6'>
                                <div
                                    className=' hidden md:block lg:block w-7  h-1 rounded-sm mb-5 bg-yellow-500'>

                                </div>
                                <div>
                                    <h2 className=' mb-4 font-semibold lg:text-5xl md:text-4xl text-2xl'>
                                        {name} <span className='text-blue-600 font-semibold font-mono text-sm lg:text-xl md:text-lg '>({price}Tk,<small className=''>Per Person</small>)</span>
                                    </h2>
                                </div>
                                <h3 className='text-lg lg:text-2xl md:text-2xl flex align items-center font-semibold mb-2'>
                                    <FaMapMarkerAlt className=' mr-2'></FaMapMarkerAlt>{packageName}</h3>
                                <p className='flex align items-center font-semibold text-sm lg:text-2xl md:text-2xl'>
                                    <FaCalendarDay className=' mr-2'></FaCalendarDay>
                                    {days} Days
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Review section */}
            <div>


            </div>
        </div>
    );
};

export default ServiceDetails;