import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">

                <div id="item1" className="carousel-item w-full">
                    <img src="https://quantum-rd.com/wp-content/uploads/2019/06/Using-Travel-Banners.jpg" className="w-full" alt='' />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;