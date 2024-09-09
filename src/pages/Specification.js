import React from 'react';
import {Link, useParams} from 'react-router-dom';
import PartHighlighter from "../components/PartHighlighter";

const Specification = ({ firms }) => {
    const { firmId, modelId,frameId,partId } = useParams();
    const firm = firms.find(f => f.id === firmId);
    const model = firm ? firm.models.find(m => m.id === modelId) : null;
    const frame = model ? model.frameId.find(m => m.name === frameId) : null;
    const part = frame ? frame.parts.find(m => m.name === partId) : null;

    if (!model) {
        return <div>Model not found!</div>;
    }
    return (
        <div>
            <h2>Choose schema:</h2>
            {part.option3.map((firm,i) => (
                <div key={i}>
                    <Link to={`${firm}`}>{firm}</Link>
                </div>
            ))}
        </div>
    );
};

export default Specification;