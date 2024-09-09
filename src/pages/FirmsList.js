import React from 'react';
import { Link } from 'react-router-dom';

const FirmsList = ({ firms }) => {
    return (
        <div>
            <h2>Genuine Online Parts Catalogues</h2>
            {firms.map(firm => (
                <div key={firm.id}>
                    <Link to={`/${firm.id}`}>{firm.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default FirmsList;
