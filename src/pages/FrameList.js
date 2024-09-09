import React from 'react';
import {Link, useParams} from 'react-router-dom';

const FrameList = ({ firms }) => {
    const { firmId, modelId,frameId } = useParams();
    const firm = firms.find(f => f.id === firmId);
    const model = firm ? firm.models.find(m => m.id === modelId) : null;
    const frame = model ? model.frameId.find(m => m.name === frameId) : null;

    if (!model) {
        return <div>Model not found!</div>;
    }
    return (
        <div>
            <h2>Spare parts for {firmId} {modelId}, {frameId}</h2>

            {frame.parts?.map(item => (
                <div key={item.name}>
                    <Link to={`${item.name}`}>{item.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default FrameList;
