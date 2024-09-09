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
    const parts2 = [
        {
            id: '09110',
            name: 'JACK ASSY',
            coords: { top: '100px', left: '475px', width: '80px', height: '20px' },
            img:"",
            items: [
                {id: '09111-22060',name: 'MCV20',range: '08.1996 - 05.1998', req:"01", price: '56.39'},
                {id: '09111-0W041',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-02090',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'}
            ]
        },
        {
            id: '09113',
            name: 'JACK ASSY',
            coords: { top: '70px', left: '85px', width: '80px', height: '20px' },
            img:"",
            items: [
                {id: '09111-22060',name: 'MCV20',range: '08.1996 - 05.1998', req:"01", price: '56.39'},
                {id: '09111-0W041',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-02090',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'}
            ]
        },
        {
            id: '09120',
            name: 'JACK ASSY',
            coords: { top: '247px', left: '149px', width: '80px', height: '20px' },
            img:"",
            items: [
                {id: '09111-22060',name: 'MCV20',range: '08.1996 - 05.1998', req:"01", price: '56.39'},
                {id: '09111-0W041',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-02090',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'}
            ]
        }

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
                    <th>OEM</th>
                    <th>Name / Details</th>
                    <th>Period</th>
                    <th>Req.</th>
                    <th>Price from, USD</th>
                </tr>
                </thead>
                <tbody>
                {parts2.map((part) => (
                    <tr
                        key={part.id}
                        className={highlightedPart === part.id ? 'highlight' : ''}
                        onMouseEnter={() => handleHover(part.id)}
                        onMouseLeave={handleLeave}
                    >
                        <td colSpan={6}>
                            <table>
                                <tbody>
                                <tr>
                                    <td colSpan={6}>{part.id}-{part.name}</td>
                                </tr>
                                {part.items.map((item) => (
                                    <tr>
                                        <td>
                                            <a href={"#"}>{item.id}</a>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.range}
                                        </td>
                                        <td>
                                            {item.req}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                            add to cart
                                        </td>
                                    </tr>
                                ))}


                                </tbody>
                            </table>
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PartHighlighter;
