import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReviewRow from './AllReviewRow';

const AllReview = () => {
    const service = useLoaderData();
    const [allReviews, setAllReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/reviews?service=${service?._id}`)
            .then(res => res.json())
            .then(data => {
                setAllReviews(data)
            })
            .catch(err => console.error(err))
    }, [service?._id])

    return (
        <div className='mb-32'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full lg:w-11/12 md:w-11/12 mx-auto">
                    <thead>
                        <tr>
                            <th>Review Items</th>
                            <th>Reviewer</th>
                            <th>Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allReviews.map(allReview =>
                                <AllReviewRow
                                    key={allReview._id}
                                    allReview={allReview}
                                ></AllReviewRow>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllReview;