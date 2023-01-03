import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewRow = ({ review, handleDelete }) => {
    const { _id,
        reviewerName,
        reviewerText,
        serviceName,
    } = review;



    return (
        <tr>
            <th>
                <label>
                    <button
                        onClick={() => handleDelete(_id)}
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
                        className='  w-10 h-10 rounded-full '
                        alt="ReviewerImg" />
                    <span className='text-sm opacity-50 ml-2'>{reviewerName}</span>
                </div>
            </td>
            <td className='text-sm  chat-start'>
                <div className="chat-bubble bg-cyan-800 text-lg text-white chat-bubble-secondary">{reviewerText}</div>
            </td>
            <td className=''>
                <Link to={`/myReview/edit/${_id}`} className="btn btn-sm  btn-outline btn-error text-white   hover:text-cyan-800 hover:drop-shadow-2xl hover:bg-yellow-500 ">edit</Link>
            </td>
        </tr >
    );
};

export default MyReviewRow;