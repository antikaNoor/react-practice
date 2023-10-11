import React, { useEffect, useState } from 'react';
import './Loader.scss'; // Import the CSS file

function LoaderComponent() {
    const [loading, setLoading] = useState(true);

    // Simulate loading for 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="loader-container">
            {loading && <div className="loader"></div>}
            {!loading && <div>Content Loaded!</div>}


        </div>
    );
}

export default LoaderComponent;
