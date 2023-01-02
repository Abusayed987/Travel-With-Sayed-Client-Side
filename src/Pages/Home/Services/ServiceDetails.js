import React, { useContext } from 'react';
import { FaCalendarDay, FaMapMarkerAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import AllReview from '../Reviews/AllReview/AllReview';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext)
    const {
        _id,
        name,
        packageName,
        days,
        itinerary,
        discription,
        img,
        price,
    } = service;

    const handleReview = (e) => {
        e.preventDefault()
        const form = e.target;
        const reviewerName = form.reviewerName.value;
        const reviewerPhoto = form.reviewerPhoto.value;
        const reviewerText = form.reviewerText.value;
        // console.log(reviewerName, reviewerPhoto, reviewerText);

        // ai same vabe (add services ) korte hobe 
        const review = {
            service: _id,
            serviceImg: img,
            serviceName: name,
            packageName: packageName,
            price,
            email: user.email,
            reviewerName: user?.displayName ? user?.displayName : reviewerName,
            reviewerPhoto,
            reviewerText
        }

        fetch('http://localhost:4000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset()
                    toast.success('Successfully Review Added')
                }
            })
            .catch(err => console.error(err))


    }

    return (
        <div>
            <div>
                <img
                    className=' w-10/12 mx-auto mt-5 rounded-md'
                    src={img} alt="img" />
                <div>
                    <div className="hero lg:w-5/6 md:w-5/6 sm:w-full mx-auto md:mt-24 lg:mt-24">
                        <div className=" flex justify-center flex-col-reverse  lg:flex-row-reverse md:flex-row-reverse p-5 md:p-0 lg:p-0 ">
                            <div className=" lg:w-1/2 md:w-1/2 sm:w-4/6 shadow-sm border  md:block lg:block mt-8">
                                <h2 className='font-semibold text-xl ml-2 p-2'>Details:</h2>
                                <h3 className=' text-lg p-5'>{discription}</h3>
                            </div>
                            <div className=' lg:w-1/2 md:w-1/2 sm:w-4/6'>
                                <div
                                    className=' hidden md:block lg:block w-7  h-1 rounded-sm mb-5 bg-yellow-500'>
                                </div>
                                <div>
                                    <h2 className=' mb-4 font-semibold lg:text-5xl md:text-4xl text-2xl'>
                                        {name} <span className='text-blue-600 font-semibold font-mono text-sm lg:text-xl md:text-lg '>({price}Tk,<small className=''>Per Person</small>)</span>
                                    </h2>
                                </div>
                                <h3 className='text-lg lg:text-2xl md:text-2xl flex align items-center font-semibold mb-2'>
                                    <FaMapMarkerAlt className=' mr-2'></FaMapMarkerAlt>{packageName}</h3>
                                <p className='flex align items-center font-semibold text-sm lg:text-2xl md:text-2xl'>
                                    <FaCalendarDay className=' mr-2'></FaCalendarDay>
                                    {days} Days
                                </p>
                                <p className=' lg:w-96 md:w-72 w mt-5'>
                                    <span className='text-lg p-5 font-semibold'>Itinerary:</span> ${itinerary}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Review section */}
            <div className=' md:mt-20 lg:mt-20'>
                <h1
                    className='text-xl md:text-3xl my-8 font-bold text-cyan-700 text-center'
                ><span className='text-cyan-500 text-4xl'>R</span>eviews
                </h1>
                <div className=' mx-auto w-3/12 mb-5  h-1 rounded-sm  bg-cyan-700'></div>
            </div>
            <AllReview></AllReview>
            <div>
                {user?.uid ?
                    <form onSubmit={handleReview}
                        className="card flex-shrink-0 lg:w-1/2 md:w-1/2 sm:w-full max-w-lg shadow-2xl bg-base-100 mx-auto">
                        <div className=" card-body">
                            <div className="form-control">
                                <div className=' w-full mb-5  h-1 rounded-sm  bg-cyan-700'></div>
                            </div>
                            <p className='text-2xl font-bold'>Write Your Review</p>
                            <div className="form-control">
                                <label className="input-group input-group-lg">
                                    <span>Name</span>
                                    <input type="text" name='reviewerName'
                                        defaultValue={user?.displayName && user?.displayName}
                                        placeholder="Your Name" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="input-group input-group-lg ">
                                    <span>Photo</span>
                                    <input type="text" name='reviewerPhoto' placeholder="Your Photo URL" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control">
                                <textarea type="text" name='reviewerText'
                                    className="textarea textarea-bordered h-24 text-lg" placeholder="Write Your Experience" required ></textarea>
                            </div>
                            <div className="form-control mt-6 mb-4">
                                <button type='submit' className="btn btn-primary bg-cyan-800 text-white   hover:bg-cyan-800 border-none hover:drop-shadow-2xl ">Submit Your Experience</button>
                            </div>
                        </div>
                    </form>
                    :
                    <div className="alert alert-warning shadow-lg w-10/12 mx-auto ">
                        <div className='text-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span className=' ml-3 '>Please
                                <Link
                                    className='link text-cyan-800'
                                    to='/login'> login </Link>
                                fast to add a review !</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;