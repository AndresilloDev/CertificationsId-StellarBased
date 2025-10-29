import { Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/404Page";
import UserProfilePage from "../pages/UserDetails";
import RegisterPage from "../pages/RegisterPage"; 

import { AuthContext } from "../context/AuthContext";

export const AppRouter = () => {
    const { user } = useContext(AuthContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    }, [user]);

    return (
        <Routes>
                {isLoggedIn && (
                    <>

                    </>
                )}

                {!isLoggedIn && (
                    <>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/UserDetails" element={<UserProfilePage />} />
                        <Route path="/register" element={<RegisterPage />} /> 
                    </>
                )}
                
                <Route path="*" element={<NotFoundPage />} />
            
        </Routes>
    );
};