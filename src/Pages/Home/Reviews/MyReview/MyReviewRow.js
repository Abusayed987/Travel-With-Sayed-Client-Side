import React from 'react';

const MyReviewRow = ({ review }) => {
    const { reviewerName,
        reviewerPhoto,
        reviewerText,
        serviceName,
        serviceImg
    } = review;


    return (
        <tr>
            <th>
                <label>
                    <button
                        // onClick={() => handleDelete(_id)}
                        className="btn btn-ghost btn-xs">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {review?.serviceImg &&
                                <img src={review?.serviceImg} alt="ServiceImg" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">
                            {serviceName}
                        </div>

                    </div>
                </div>
            </td>
            <td className='text-sm '>
                <div className='flex items-center'>
                    <img src={review?.reviewerPhoto}
                        className='  w-7 '
                        alt="ServiceImg" />
                    <span className='text-sm opacity-50 ml-2'>{reviewerName}</span>
                </div>
            </td>
            <td className='text-sm chat chat-start'>
                <div className="chat-bubble chat-bubble-secondary">{reviewerText}</div>
            </td>
        </tr>
    );
};

export default MyReviewRow;