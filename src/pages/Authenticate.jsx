import { Navigate, Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios";

const Authenticate = () => {
    const check = localStorage.getItem("user");
    console.log("Authenticating", check);

    return check ? (
        <div>
            <Outlet />
        </div>

    ) : (
        <Navigate to="/login" />
    );
};

export default Authenticate;
