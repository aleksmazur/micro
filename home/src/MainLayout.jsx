import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HomeContent from "home/HomeContent";
import PdpContent from "pdp/PdpContent";
import ProfileContent from "profile/ProfileContent";

import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import "./index.scss";

export default function MainLayout () {
    return (
    <Router>
        <Header />
        <div className="my-10">
            <Routes>
                <Route exact path='/' element={<HomeContent/>}/>
                <Route path='/char/:id' element={<PdpContent/>}/>
                <Route path='/profile' element={<ProfileContent/>}/>
            </Routes>
        </div>
        <Footer/>
    </Router>
)};
