import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTittle from '../../../../hooks/UseTittle';

const EditReview = () => {
    useTittle('Edit Review')
    const currentReview = useLoaderData()
    const navigate = useNavigate()
    // console.log(currentReview);
    // const [review, setReview] = useState(currentReview)


    const handleEditReview = e => {
        e.preventDefault()
        const form = e.target;
        const reviewerName = form.reviewerName.value;
        const reviewerPhoto = form.reviewerPhoto.value;
        const reviewerText = form.reviewerText.value;

        const newReview = {
            _id: currentReview._id,
            reviewerName,
            reviewerPhoto,
            reviewerText
        }
        toast.error('Unsuccessful edit, try next Time')
        navigate('/myReview')


        // fetch(`http://localhost:4000/reviews/${currentReview._id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newReview)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         // if (data.modifiedCount) {
        //         //     toast.success('Review Successfully Edited')
        //         //     navigate('/myReview')
        //         // }
        //         // else {
        //         //     toast.error('Unsuccessful, try letter')
        //         // }
        //     })
        //     .catch(err => console.error(err))
    }

    return (
        <div>
            <form onSubmit={handleEditReview}
                className="card flex-shrink-0 lg:w-1/2 md:w-1/2 sm:w-full max-w-lg shadow-2xl bg-base-100 mx-auto">
                <div className=" card-body">
                    <div className="form-control">
                        <div className=' w-full mb-5  h-1 rounded-sm  bg-cyan-700'></div>
                    </div>
                    <p className='text-2xl font-bold'>Edit Your
                        <span className='text-cyan-700 mx-1'>{currentReview.serviceName}</span> Review</p>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span className=' w-2/6'>Edit Name</span>
                            <input type="text" name='reviewerName'
                                defaultValue={currentReview?.reviewerName && currentReview?.reviewerName}
                                placeholder="Your Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control">
                        <div className='flex items-center'>
                            <label className="input-group input-group-lg ">
                                <span className='w-2/5'>edit Photo</span>
                                <input type="text" name='reviewerPhoto'
                                    defaultValue={currentReview?.reviewerPhoto && currentReview?.reviewerPhoto}
                                    placeholder="Your Photo URL" className="input input-bordered w-full" required />
                            </label>
                            <img className=' w-10 h-10 rounded-full' src={currentReview?.reviewerPhoto && currentReview?.reviewerPhoto} alt="img" />
                        </div>
                    </div>
                    <div className="form-control">
                        <textarea type="text" name='reviewerText'
                            defaultValue={currentReview?.reviewerText && currentReview?.reviewerText}
                            className="textarea textarea-bordered h-24 text-lg" placeholder="Write Your Experience" required ></textarea>
                    </div>
                    <div className="form-control mt-6 mb-4">
                        <button type='submit' className="btn btn-primary bg-cyan-800 text-white   hover:bg-cyan-800 border-none hover:drop-shadow-2xl ">Update Your Review</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditReview;