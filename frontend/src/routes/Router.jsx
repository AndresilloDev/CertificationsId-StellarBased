import { Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/404Page";
import UserProfilePage from "../pages/UserDetails";
import RegisterPage from "../pages/RegisterPage";
import HomeUser from "../pages/HomeUserPage";

import { useAuth } from "../context/AuthContext";

export const AppRouter = () => {
    const { user } = useAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    }, [user]);

    return (
        <Routes>
                {isLoggedIn && (
                    <>
                        <Route path="/UserDetails" element={<UserProfilePage />} />
                        <Route path="/homeUser" element={<HomeUser />} /> 
                    </>
                )}

                {!isLoggedIn && (
                    <>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </>
                )}
                
                <Route path="*" element={<NotFoundPage />} />
            
        </Routes>
    );
};