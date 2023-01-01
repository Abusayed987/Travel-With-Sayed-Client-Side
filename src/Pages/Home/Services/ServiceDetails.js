import React from 'react';
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


    return (
        <div>
            <h2>{packageName}</h2>
        </div>
    );
};

export default ServiceDetails;