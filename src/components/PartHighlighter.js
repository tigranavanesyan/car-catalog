import React, { useState } from 'react';


// Component to render image map and table
const PartHighlighter = () => {
    const [highlightedPart, setHighlightedPart] = useState(null);

    const parts = [
        { id: '09110', name: 'Wrench, Hub Nut Box', range: '12.2001 - 12.2004', price: '11.00', coords: { top: '70px', left: '85px', width: '80px', height: '20px' } },
        { id: '09113', name: 'Spanner', range: '12.2004 - ...', price: '2.29', coords: { top: '100px', left: '475px', width: '80px', height: '20px' } },
        { id: '09120', name: 'Pliers', range: '12.2001 - 12.2004', price: '3.82', coords: { top: '247px', left: '149px', width: '80px', height: '20px' } },
        // Add more parts and coordinates as necessary
    ];

    const handleHover = (partId) => {
        setHighlightedPart(partId);
    };

    const handleLeave = () => {
        setHighlightedPart(null);
    };

    return (
        <div className="container">
            <div className="image-container">
                <img src="/090494.png" alt="Parts" className="image" />

                {parts.map((part) => (
                    <div
                        key={part.id}
                        className={`overlay ${highlightedPart === part.id ? 'hovered' : ''}`}
                        style={{
                            top: part.coords.top,
                            left: part.coords.left,
                            width: part.coords.width,
                            height: part.coords.height,
                        }}
                        onMouseEnter={() => handleHover(part.id)}
                        onMouseLeave={handleLeave}
                    />
                ))}
            </div>

            <table className="parts-table">
                <thead>
                <tr>
                    <th>Part Number</th>
                    <th>Part Name</th>
                    <th>Date Range</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {parts.map((part) => (
                    <tr
                        key={part.id}
                        className={highlightedPart === part.id ? 'highlight' : ''}
                        onMouseEnter={() => handleHover(part.id)}
                        onMouseLeave={handleLeave}
                    >
                        <td>{part.id}</td>
                        <td>{part.name}</td>
                        <td>{part.range}</td>
                        <td>{part.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PartHighlighter;
