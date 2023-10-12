import React from 'react'
import { Outlet, useLocation } from "react-router-dom";
import Loader from '../../components/Loader/Loader'

function About() {
    const location = useLocation();
    console.log("The state data ", location);
    return (
        <Loader />
    )
}

export default About