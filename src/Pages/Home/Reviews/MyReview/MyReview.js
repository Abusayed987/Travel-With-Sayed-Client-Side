import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import useTittle from '../../../../hooks/UseTittle';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    useTittle('MyReview')
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`http://localhost:4000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('travelWithSayedToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
            .catch(err => console.error(err))
    }, [user?.email])

    const handleDelete = id => {

        const proceed = window.confirm('Are You Sure That YOu Want to Delete Your Order')
        if (proceed) {
            fetch(`http://localhost:4000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('Successfully Deleted Your Review')
                        const remaining = reviews.filter(review => review._id !== id)
                        setReviews(remaining)
                    }
                })
                .catch(err => console.error(err))
        }
    }





    if (!reviews.length) {
        return (
            <div className=' min-h-screen mt-16'>
                <div className="alert alert-warning shadow-lg w-10/12 mx-auto  ">
                    <div className='text-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span className=' ml-3 '>No reviews were added</span>
                    </div>
                </div>
            </div>
        )
    } else {
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
                                <th>Edit Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(review =>
                                    <MyReviewRow
                                        key={review._id}
                                        review={review}
                                        handleDelete={handleDelete}
                                    ></MyReviewRow>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    ;
}

export default MyReview;