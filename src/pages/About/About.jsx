import React from 'react'
import { Outlet, useLocation } from "react-router-dom";

function About() {
    const location = useLocation();
    console.log("The state data ", location);
    return (
        <div>About</div>
    )
}

export default About