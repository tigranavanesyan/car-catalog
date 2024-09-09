import React from 'react';
import {Link, useParams} from 'react-router-dom';

const CarDetails = ({ firms }) => {
    const { firmId, modelId } = useParams();
    const firm = firms.find(f => f.id === firmId);
    const model = firm ? firm.models.find(m => m.id === modelId) : null;

    if (!model) {
        return <div>Model not found!</div>;
    }

    return (
        <div>
            <p>Choose frame by market:</p>
            {model.frameId?.map(item => (
                <div key={item.name}>
                    <Link to={`${item.name}`}>{item.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default CarDetails;
