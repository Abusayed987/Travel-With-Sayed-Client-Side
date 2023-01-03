import React from 'react';

const AllReviewRow = ({ allReview }) => {
    const { reviewerName,
        reviewerText,
        serviceName,
        price
        ,
    } = allReview;


    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {allReview?.serviceImg &&
                                <img src={allReview?.serviceImg} alt="ServiceImg" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">
                            {serviceName}
                        </div>
                        <span className='text-sm opacity-50'>BDT {price}</span>
                    </div>
                </div>
            </td>
            <td className='text-sm '>
                <div className='flex items-center'>
                    <img src={allReview?.reviewerPhoto}
                        className=' w-10 h-10  rounded-full'
                        alt="ServiceImg" />
                    <span className='text-sm opacity-50 ml-2'>{reviewerName}</span>
                </div>
            </td>
            <td className=' chat-start'>
                <div className="chat-bubble bg-cyan-800 text-lg text-white chat-bubble-secondary ">{reviewerText}</div>
            </td>
        </tr>
    );
};

export default AllReviewRow;