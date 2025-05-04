import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import '../styles/components/auth-card.css';

import About from "./components/About/About";
import AuthCard from "./components/Authentication/AuthCard";
import ComingSoon from "./components/Pages/ComingSoon";
import DonationRequests from "./components/DonationRequests/DonationRequests";
import Home from "./components/Pages/Home";
import Layout from "./components/Layout/Layout";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="home" element={<Home />} />
                    <Route path="coming-soon" element={<ComingSoon />} />
                    <Route path="about" element={<About />} />
                    <Route path="donation-requests" element={<DonationRequests />} />

                </Route>

                <Route path={"login"} element={<AuthCard/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;