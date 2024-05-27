import "./App.scss";
import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Assistant from "./pages/Assistant";

const App = () => {
 
  return (
    <>
      <Router>
        <>
          <Header />
          <div className="wrapper">
            <Routes>
               <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs/>} />
              <Route path="/assistant" element={<Assistant/>}/>
            </Routes>
          </div>
          <Footer />
        </>
      </Router>
    </>
  );
}

export default App;
