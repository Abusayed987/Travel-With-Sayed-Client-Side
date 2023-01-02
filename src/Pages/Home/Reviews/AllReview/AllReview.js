import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReviewRow from './AllReviewRow';

const AllReview = () => {
    const service = useLoaderData();
    const [allReviews, setAllReviews] = useState([])
    const [refresh, setRefresh] = useState(false)


    useEffect(() => {
        fetch(`http://localhost:4000/allReviews?service=${service?._id}`)
            .then(res => res.json())
            .then(data => {
                setAllReviews(data)
                setRefresh(!refresh)
            })
            .catch(err => console.error(err))
    }, [service?._id, refresh])

    return (
        <div className='mb-32'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full lg:w-11/12 md:w-11/12 mx-auto">
                    <thead>
                        <tr>
                            <th>Review Items</th>
                            <th>Reviewer</th>
                            <th className='w-1/2'>Experience</th>
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