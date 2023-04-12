import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
import Footer from "home/Footer";
import Header from "home/Header";
import PdpContent from "./PdpContent";

import "./index.scss";

const App = () => (
    <Router>
        <Header />
        <h2>Module01</h2>
        <div className="my-10">
            <Routes>
                <Route path='/char/:id' element={<PdpContent/>}/>
            </Routes>
        </div>
        <Footer/>
    </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
