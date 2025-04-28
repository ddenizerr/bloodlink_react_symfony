import React from "react";
import Layout from "./components/Layout/Layout";
import '../styles/components/auth-card.css';
import ComingSoon from "./components/Layout/ComingSoon";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./components/About/About";
import DonationRequests from "./components/DonationRequests/DonationRequests";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<ComingSoon/>}/>
                    <Route path={"about"} element={<About/>} />
                    <Route path={"donation-requests"} element={<DonationRequests/>} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;