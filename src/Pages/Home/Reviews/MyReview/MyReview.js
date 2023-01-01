import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>

        </div>
    );
};

export default MyReview;