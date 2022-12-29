import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/yfCNB4s/tripcare360-1920x475-1.jpg" className="w-full rounded-sm hidden md:block lg:block" alt='' />

                    <img src="https://img.freepik.com/premium-photo/rear-view-asian-man-hat-with-suitcase-bag-backpack-walking-beach_9083-3246.jpg?w=2000"
                        className="w-full rounded-sm md:hidden lg:hidden" alt='' />
                    <div
                        className="absolute flex justify-between transform -translate-y-1/2  top-1/4 bg-white rounded-md ml-20  py-14 px-10 opacity-50 ">
                        <h1
                            className='text-2xl font-semibold  ml-20 hidden md:block lg:block'
                        >
                            Traveling keeps you happy and <br />
                            It helps keep your mind fresh !
                        </h1>
                    </div>
                    <div
                        className="absolute flex justify-between transform -translate-y-1/2  top-1/4  rounded-md ml-20  py-14 px-10  ">
                        <h1
                            className='text-2xl font-semibold  ml-20  hidden md:block lg:block'
                        >
                            Traveling keeps you happy and <br />
                            It helps keep your mind fresh !

                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;