import React from 'react';
import useTittle from '../../hooks/UseTittle';

const NotFound = () => {
    useTittle('404')
    return (
        <div>
            <h2>404</h2>
        </div>
    );
};

export default NotFound;