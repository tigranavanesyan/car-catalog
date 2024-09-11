import React, {useEffect, useRef, useState} from 'react';


// Component to render image map and table
const PartHighlighter = () => {
    const [highlightedPart, setHighlightedPart] = useState(null);
    const [hoverOnList, setHoverOnList] = useState(false);

    const listElement = useRef(null);

    useEffect(() => {
        if(!hoverOnList){
            const currentHighlight = listElement.current.querySelector('.grid_section.highlight');
            currentHighlight?.scrollIntoView({block:"nearest", behavior: 'smooth',inline:"start"});
        }
    }, [highlightedPart,hoverOnList]);

    const parts2 = [
        {
            id: '09110',
            name: 'JACK ASSY',
            coords: { top: '6%', left: '11%', width: '11%', height: '2.5%' },
            img:"",
            items: [
                {id: '09111-22060',name: 'MCV20',range: '08.1996 - 05.1998', req:"01", price: '56.39'},
                {id: '09111-0W041',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-02090',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-02090',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-02090',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-02090',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-02090',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-02090',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-02090',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-02090',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'}
            ]
        },
        {
            id: '09113',
            name: 'JACK ASSY',
            coords: { top: '8.8%', left: '62%', width: '11%', height: '2.5%' },
            img:"",
            items: [
                {id: '09111-22060',name: 'MCV20',range: '08.1996 - 05.1998', req:"01", price: '56.39'},
                {id: '09111-0W041',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-0W041',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-0W041',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-0W041',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-0W041',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-0W041',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-02090',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'}
            ]
        },
        {
            id: '09120',
            name: 'JACK ASSY',
            coords: { top: '21.8%', left: '19%', width: '11%', height: '2.5%' },
            img:"",
            items: [
                {id: '09111-22060',name: 'MCV20',range: '08.1996 - 05.1998', req:"01", price: '56.39'},
                {id: '09111-22060',name: 'MCV20',range: '08.1996 - 05.1998', req:"01", price: '56.39'},
                {id: '09111-22060',name: 'MCV20',range: '08.1996 - 05.1998', req:"01", price: '56.39'},
                {id: '09111-22060',name: 'MCV20',range: '08.1996 - 05.1998', req:"01", price: '56.39'},
                {id: '09111-0W041',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'},
                {id: '09111-02090',name: 'MCV20',range: '05.1998 - ...', req:"01",price: '50.66'}
            ]
        }
    ];

    const handleHover = (partId,bool) => {
        setHighlightedPart(partId);
    };

    const handleLeave = () => {
        setHighlightedPart(null);
        setHoverOnList(false)
    };

    return (
        <div className="container">
            <div className="image_wrapper">
                <div className="image-container">
                    <img src="/090494.png" alt="Parts" className="image"/>

                    {parts2.map((part) => (
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
            </div>

            <div ref={listElement} className="grid_table">
                <div className="grid_head">OEM</div>
                <div className="grid_head">Name / Details</div>
                <div className="grid_head">Period</div>
                <div className="grid_head">Req.</div>
                <div className="grid_head">Price from, USD</div>
                <div className="grid_head">*</div>
                {parts2.map((part) => (
                    <div
                        key={part.id}
                        className={`grid_table1 grid_section ${highlightedPart === part.id ? 'highlight' : ''}`}
                        onMouseEnter={() => {
                            handleHover(part.id)
                            setHoverOnList(true)
                        }}
                        onMouseLeave={handleLeave}
                    >
                        <div key={part.id} className={`grid_title`}>{part.id}-{part.name}</div>
                        {part.items.map((item) => (
                            <div className={"grid_table1 grid_section list_row"}>
                                <div><a href={"https://japanauction1987.netlify.app/"} target={"_blank"} rel="noreferrer">{item.id}</a></div>
                                <div>{item.name}</div>
                                <div>{item.range}</div>
                                <div>{item.req}</div>
                                <div>{item.price}</div>
                                <div>cart</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartHighlighter;
