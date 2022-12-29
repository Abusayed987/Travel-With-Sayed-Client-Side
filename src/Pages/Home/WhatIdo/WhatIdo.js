import React from 'react';

const WhatIdo = () => {
    return (
        <div>
            <h2 className='text-center mt-24 text-5xl font-semibold   '>What
                <span className='text-cyan-600 text-6xl'> i </span>
                Do ?</h2>
            <div className=' mx-auto w-3/12 mt-5  h-1 rounded-sm  bg-cyan-700'></div>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center lg:w-5/6 md:w-5/6 sm:w-full mx-auto mt-24"
            >
                <div className='card-body items-center text-center'>
                    <img className='w-16 md:w-20 lg:w-24' src="https://www.talon.com.bd/assets/images/icon/Online-Booking-Service-icon-2.png" alt="img" />
                    <h3 className=' mt-1 font-semibold text-cyan-800 text-lg md:text-xl lg:text-2xl'>Online Booking Service
                    </h3>
                    <p className='text-black text-semibold'>Online booking service through my OTA portal Tlntrip will have multi GDS connectivity and API</p>
                </div>
                <div className='card-body items-center text-center'>
                    <img className='w-16 md:w-20 lg:w-24' src="https://www.talon.com.bd/assets/images/icon/Ticketing_2.png" alt="img" />
                    <h3 className=' mt-1 font-semibold text-cyan-800 text-lg md:text-xl lg:text-2xl'>Ticketing
                    </h3>
                    <p className='text-black text-semibold'>Yes, i provide 24/7 ticketing service 365 days.</p>
                </div>
                <div className='card-body items-center text-center'>
                    <img className='w-16 md:w-20 lg:w-24' src="https://www.talon.com.bd/assets/images/icon/Tour-Package.png" alt="img" />
                    <h3 className=' mt-1 font-semibold text-cyan-800 text-lg md:text-xl lg:text-2xl'>Tour Package
                    </h3>
                    <p className='text-black text-semibold'>my experience will allow you to customize package accordingly to ymy need.</p>
                </div>
                <div className='card-body items-center text-center'>
                    <img className='w-16 md:w-20 lg:w-24' src="https://www.talon.com.bd/assets/images/icon/Hotel-Booking-icon.png" alt="img" />
                    <h3 className=' mt-1 font-semibold text-cyan-800 text-lg md:text-xl lg:text-2xl'>Hotel Booking
                    </h3>
                    <p className='text-black text-semibold'>Ymy 360 hotel booking provider.</p>
                </div>
                <div className='card-body items-center text-center'>
                    <img className='w-16 md:w-20 lg:w-24' src="https://www.talon.com.bd/assets/images/icon/Foregin-Dollar-Endosement-icon.png" alt="img" />
                    <h3 className=' mt-1 font-semibold text-cyan-800 text-lg md:text-xl lg:text-2xl'>Foregin Dollar Endosement
                    </h3>
                    <p className='text-black text-semibold'>Travel service for ymy at doorstep.</p>
                </div>
            </div>
        </div>
    );
};

export default WhatIdo;