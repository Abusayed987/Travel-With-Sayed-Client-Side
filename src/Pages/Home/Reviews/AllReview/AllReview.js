import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const AllReview = () => {

    const [allReview, setAllReview] = useState({})

    const service = useLoaderData();


    useEffect(() => {
        fetch(`http://localhost:4000/reviews?service=${service?._id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllReview(data)
            })
            .catch(err => console.error(err))
    }, [service?._id])

    return (
        <div>
            <h1>Here is allReview</h1>
            <h2>{allReview.length}</h2>
        </div>
    );
};

export default AllReview;