import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`http://localhost:4000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
            .catch(err => console.error(err))
    }, [user?.email])

    return (
        <div className='mb-32'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <>Delete</>
                            </th>
                            <th>Review Items</th>
                            <th>Reviewer</th>
                            <th>Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review =>
                                <MyReviewRow
                                    key={review._id}
                                    review={review}
                                ></MyReviewRow>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;