import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, price, name, discription } = service;
    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl mb-2">
                <figure>
                    <img
                        className='h-56'
                        src={img} alt="img" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name} - <span className='text-blue-600 font-semibold font-mono text-xl'>{price}Tk</span></h2>

                    <p className='text-lg text-cyan-900'>{discription.slice(0, 97)}...</p>
                    <div className="card-actions justify-start my-2">
                        <Link className="btn btn-sm btn-outline rounded border">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;