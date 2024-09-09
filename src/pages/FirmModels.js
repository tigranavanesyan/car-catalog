import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FirmModels = ({ firms }) => {
    const { firmId } = useParams();
    const firm = firms.find(f => f.id === firmId);

    if (!firm) {
        return <div>Firm not found!</div>;
    }

    return (
        <div>
            <h2>{firm.name}</h2>
            {firm.models.map(model => (
                <div key={model.id}>
                    <Link to={`${model.id}`}>{model.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default FirmModels;
