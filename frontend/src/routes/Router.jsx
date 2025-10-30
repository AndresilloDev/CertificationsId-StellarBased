import { Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/404Page";
import RegisterPage from "../pages/RegisterPage";
import HomeEnterprise from "../pages/HomeEnterprisePage";
import RecordUserPage from "../pages/RecordUserPage";
import GuiaApi from "../pages/GuiaApi";
import Certificates from "../pages/IssueCertificates";

import LandingPage from "../pages/LandingPage";
import UserHomePage from "../pages/UserHomePage";
import UserProfilePage from "../pages/UserProfilePage";

import { useAuth } from "../context/AuthContext";
import { JoinUsPage } from "../pages/JoinUsPage";
import { ContactPage } from "../pages/ContactPage";

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
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/user/profile" element={<UserProfilePage />} />
                        <Route path="/user/home" element={<UserHomePage />} />

                        <Route path="/home/enterprise" element={<HomeEnterprise />} />
                        <Route path="/recordUser" element={<RecordUserPage />} />
                        <Route path="/guiaApi" element={<GuiaApi />} />
                        <Route path="/certificates" element={<Certificates />} />
                    </>
                )}

                {!isLoggedIn && (
                    <>
                        <Route path="/" element={<LandingPage />} />

                        {/** Autenticación */}
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/joinus" element={<JoinUsPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </>
                )}
                
                <Route path="*" element={<NotFoundPage />} />
            
        </Routes>
    );
};