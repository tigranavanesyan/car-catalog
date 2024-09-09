import React from 'react';
import {Link, useParams} from 'react-router-dom';
import PartHighlighter from "../components/PartHighlighter";
import PartHighlighter2 from "../components/PartHighlighter2";

const Scheme = ({ firms }) => {
    const { firmId, modelId,frameId,partId } = useParams();
    const firm = firms.find(f => f.id === firmId);
    const model = firm ? firm.models.find(m => m.id === modelId) : null;
    const frame = model ? model.frameId.find(m => m.name === frameId) : null;
    const part = frame ? frame.parts.find(m => m.name === partId) : null;

    if (!model) {
        return <div>Model not found!</div>;
    }
    console.log(part)
    return (
        <div>
            <h2>Choose schema:</h2>
            <PartHighlighter2/>
        </div>
    );
};

export default Scheme;