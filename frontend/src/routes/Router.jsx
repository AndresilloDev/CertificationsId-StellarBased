import { Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/404Page";
import RegisterPage from "../pages/RegisterPage";
import HomeEnterprise from "../pages/HomeEnterprisePage";
import RecordUserPage from "../pages/RecordUserPage";
import GuiaApi from "../pages/GuiaApi";
import Certificates from "../pages/IssueCertificates";

import UserHomePage from "../pages/UserHomePage";
import UserProfilePage from "../pages/UserProfilePage";

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
                        <Route path="/user/profile" element={<UserProfilePage />} />
                        <Route path="/user/home" element={<UserHomePage />} />
                    </>
                )}

                {!isLoggedIn && (
                    <>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/homeEnterprise" element={<HomeEnterprise />} />
                        <Route path="/recordUser" element={<RecordUserPage />} />
                        <Route path="/guiaApi" element={<GuiaApi />} />
                        <Route path="/certificates" element={<Certificates />} />
                    </>
                )}
                
                <Route path="*" element={<NotFoundPage />} />
            
        </Routes>
    );
};