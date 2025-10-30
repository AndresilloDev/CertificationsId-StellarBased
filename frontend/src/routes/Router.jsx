import { Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/404Page";
import UserProfilePage from "../pages/UserDetails";
import RegisterPage from "../pages/RegisterPage";
import HomeEnterprise from "../pages/HomeEnterprisePage";
import HomeUserPage from "../pages/HomeUserPage";
import RecordUserPage from "../pages/RecordUserPage";
import GuiaApi from "../pages/GuiaApi";
import Certificates from "../pages/IssueCertificates";
import HomeUser from "../pages/HomeUserPage";

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
                        <Route path="/UserDetails" element={<UserProfilePage />} />
                        <Route path="/homeUser" element={<HomeUser />} /> 
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


                        <Route path="/homeEnterprise" element={<HomeEnterprise />} />
                        <Route path="/homeUser" element={<HomeUserPage />} />
                        <Route path="/recordUser" element={<RecordUserPage />} />
                        <Route path="/guiaApi" element={<GuiaApi />} />
                        <Route path="/certificates" element={<Certificates />} />
                    </>
                )}
                
                <Route path="*" element={<NotFoundPage />} />
            
        </Routes>
    );
};