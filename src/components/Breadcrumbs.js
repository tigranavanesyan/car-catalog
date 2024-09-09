import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <nav>
            <ul className="breadcrumbs">
                {pathnames.length > 0 ? (
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                ) : (
                    <li>Home</li>
                )}
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return (
                        <li key={to}>
                            {index === pathnames.length - 1 ? (
                                value
                            ) : (
                                <Link to={to}>{value}</Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
