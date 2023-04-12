import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

import "./index.scss";

import Footer from "home/Footer";
import Header from "home/Header";
import ProfileContent from "./ProfileContent";

import "./index.scss";

const App = () => (
    <Router>
        <Header />
        <h2>Module02</h2>
        <div className="my-10">
            <Routes>
                <Route path='/profile' element={<ProfileContent/>}/>
            </Routes>
        </div>
        <Footer/>
    </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
